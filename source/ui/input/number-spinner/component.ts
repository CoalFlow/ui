import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import { IUiInputNumberOptions, UiInputNumberController } from '../number/component';
import {UiInputNumberComponent} from "../number/component";

require('./style.scss');

export interface IUiInputNumberSpinnerOptions extends IUiInputNumberOptions {

}

export class UiInputNumberSpinnerController extends UiInputNumberController {

    $input: JQuery;

    $postLink() {

        //  bind clicks on the spinners
        this.$element
            .on('mousedown', '.incrementer', (e: JQueryEventObject) => this.incrementValue())
            .on('mousedown', '.decrementer', (e: JQueryEventObject) => this.decrementValue());

    }

    incrementValue(): void {
        this.changeValueBy(this.increment);
    }

    decrementValue(): void {
        this.changeValueBy(this.increment * -1);
    }

    changeValueBy(value: number) {
        if(!this.setDisabled)
        {
            //  Get the current value from the DOM
            let currentValue = this.parse(this.$input.val());

            //  Set it to zero if it is non-numeric
            if (currentValue === null)
            {
                currentValue = 0;
            }

            //  Change the value
            currentValue += value;

            currentValue = this.testBounds(currentValue);

            //  Set the view value
            this.setViewValue(currentValue);
        }

    }

    setViewValue(value: number) {

        //  Format the value and write it back to the DOM
        this.$input.val(this.format(value));

        //  Set the view value on ngModel (this may be rejected if it is invalid, end result will be null)
        this.ngModel.$setViewValue(this.$input.val());

    }

    $onInit() {
        super.$onInit();
        
        this.$input = $(this.$element.find('input'));

        this.$input.on("change keyup", (event: JQueryEventObject) => {
            this.ngModel.$setViewValue(this.$input.val());
        });

        this.ngModel.$render = () => {
            this.testBounds(this.ngModel.$viewValue);
            this.$input.val(this.ngModel.$viewValue);
        };        
    }
}

export class UiInputNumberSpinnerComponent extends UiInputNumberComponent {

    constructor()
    {
        super();

        this.controller = UiInputNumberSpinnerController;
        this.template = require('./template.html');

    }
}
