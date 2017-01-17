import * as moment from "moment";
import { UiInputCommonController, IUiInputCommonOptions, UiInputCommonComponent } from '../common/component';

require('./style.scss');

// Default format is date/month/year hours:minutes in 24 hour time - in local time

const DEFAULT_FORMAT: string = "DD/MM/YYYY HH:mm";

export interface IUiInputDateTimeSpinnerOptions extends IUiInputCommonOptions
{
    format: string; //   Moment style format string - revert to default if not provided
    min: Date;
    max: Date;
}

export class UiInputDateTimeSpinnerController extends UiInputCommonController<Date, IUiInputDateTimeSpinnerOptions>
{

    constructor($element: ng.IAugmentedJQuery, $attrs: ng.IAttributes)
    {
        super($element, $attrs);

        this.defaultOptions.format = DEFAULT_FORMAT;

    }

    getDays() {
        return [1,2,3,4,5,6,7,8,9,10,11,12,13];
    }

    getMonths() {
        return ['Jan', 'Feb','Mar','Apr','May'];
    }

    getYears() {
        return [2015,2016,2017,2018,2019];
    }

    getHours() {
        return ['00','01','02','03','04'];
    }

    getMinutes() {
        return ['00','01','02','03','04','05','06'];
    }

    parse(value: string): Date
    {
        let parsedValue: Date = moment(value, this.options.format).toDate();
        return parsedValue;
    }

    format(value: Date): string
    {
        return moment(value).format(this.options.format);
    }
    
    $onInit() {
        super.$onInit();
        
        $('.wrap').bind( 'mousewheel', function(event){
            event.preventDefault();
            if(event.originalEvent["wheelDelta"] / 120 > 0) {
                console.log('Up');
                this.position -= 120;
            } else {
                console.log('Down');
                this.position += 120;
            }
        });
    }
}

export class UiInputDateTimeSpinnerComponent extends UiInputCommonComponent
{

    controller = UiInputDateTimeSpinnerController;
    template = require('./template.html');

}