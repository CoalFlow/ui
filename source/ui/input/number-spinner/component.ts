import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';
import { IUiInputNumberOptions, UiInputNumberController } from '../number/component';

require('./style.scss');

export interface IUiInputNumberSpinnerOptions extends IUiInputNumberOptions {

}

export class UiInputNumberSpinnerController extends UiInputNumberController {

    $input: JQuery;

    $postLink() {

        //  get the html element that stores the viewvalue
        this.$input = $(this.$element.find('input'));

        //  bind clicks on the spinners
        this.$element
            .on('mousedown', '.incrementer', (e: JQueryEventObject) => this.increment())
            .on('mousedown', '.decrementer', (e: JQueryEventObject) => this.decrement());

    }

    increment(): void {
        this.changeValueBy(this.options.increment);
    }

    decrement(): void {
        this.changeValueBy(this.options.increment * -1);
    }

    changeValueBy(value: number) {

        if(!this.setDisabled)
        {
            //  Get the current value from the DOM
            let currentValue = this.parse(this.$input.val());

            //  Set it to zero if it is non-numeric
            if (currentValue == null)
            {
                currentValue = 0;
            }

            //  Change the value
            currentValue += value;

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
        
        var $input = $(this.$element.find('input'));

        $input.on("change keyup", (event: JQueryEventObject) => {
            this.ngModel.$setViewValue($input.val());
        })

        this.ngModel.$render = () => {
            $input.val(this.ngModel.$viewValue);
        };        
    }
}

export class UiInputNumberSpinnerComponent extends UiInputCommonComponent implements ng.IComponentOptions {

    controller = UiInputNumberSpinnerController;
    template = require('./template.html');

}
