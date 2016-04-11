import {Component} from 'angular2/core';
import {CalendarService} from './calendar.service';
import 'rxjs/Rx';

@Component({
    selector: 'calendar',
    template: `<div class="calendar">
                    <div *ngFor="#item of calendar" class="calendar-item">
                        <span class="title">{{item.summary}}</span>
                        <span class="time">{{item.start.date | date:'shortTime'}} -- {{item.end.date | date:'shortTime'}} </span>
                    </div>
                    <div ng-if="calendar.length === 0">
                        <p>Nothing in your calendar</p>
                    </div>
                </div>`,
    providers: [CalendarService],
    styles: [`
        .calendar {
            display: flex;
            flex-direction: column;
        }
        
        .calendar-item{
            margin-bottom: 2rem;
        }
        
        .calendar .title, .calendar .time {
            display : block;
        }
        
    `]
})
export class CalendarComponent {
    calendar:Object;

    constructor(private _calendarService:CalendarService) {

    }

    ngAfterContentInit() {
        this.getCalendar();

        var hour = 60 * 60 * 1000;
        var _this = this;
        var doTheTimeout = function () {
            setTimeout(function () {
                _this.getCalendar();
                doTheTimeout()
            }, hour);

        };
        doTheTimeout();
    }

    getCalendar(){
        console.log('getting the calendar');
        this._calendarService.getCalendar()
            .map(res=>res.json())
            .map(data=> {
                data.forEach(function (item) {
                    item.start.date = Date.parse(item.start.dateTime);
                    item.end.date = Date.parse(item.end.dateTime);
                });
                return data;
            })
            .subscribe(calendar=>this.calendar = calendar);
    }
}