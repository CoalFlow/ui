import { IUiInputCommonOptions, UiInputCommonController, UiInputCommonComponent } from '../common/component';

require('./style.scss');

export interface IUiInputTextOptions extends IUiInputCommonOptions {

}

export class UiInputTextController extends UiInputCommonController<String, IUiInputTextOptions> implements ng.IController {

    parse(value: String): String {
        return value;

    }

    format(value: String): String {
        return value;
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

export class UiInputTextComponent extends UiInputCommonComponent {

    controller = UiInputTextController;
    template = require('./template.html');

}


// export default (module: ng.IModule) => {

//     module.component('uiInputText', new Component());

// };
