System.register(['angular2/core', './calendar.service', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, calendar_service_1;
    var CalendarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            CalendarComponent = (function () {
                function CalendarComponent(_calendarService) {
                    this._calendarService = _calendarService;
                }
                CalendarComponent.prototype.ngAfterContentInit = function () {
                    this.getCalendar();
                    var hour = 60 * 60 * 1000;
                    var _this = this;
                    var doTheTimeout = function () {
                        setTimeout(function () {
                            _this.getCalendar();
                            doTheTimeout();
                        }, hour);
                    };
                    doTheTimeout();
                };
                CalendarComponent.prototype.getCalendar = function () {
                    var _this = this;
                    console.log('getting the calendar');
                    this._calendarService.getCalendar()
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        data.forEach(function (item) {
                            item.start.date = Date.parse(item.start.dateTime);
                            item.end.date = Date.parse(item.end.dateTime);
                        });
                        return data;
                    })
                        .subscribe(function (calendar) { return _this.calendar = calendar; });
                };
                CalendarComponent = __decorate([
                    core_1.Component({
                        selector: 'calendar',
                        template: "<div class=\"calendar\">\n                    <div *ngFor=\"#item of calendar\" class=\"calendar-item\">\n                        <span class=\"title\">{{item.summary}}</span>\n                        <span class=\"time\">{{item.start.date | date:'shortTime'}} -- {{item.end.date | date:'shortTime'}} </span>\n                    </div>\n                    <div ng-if=\"calendar.length === 0\">\n                        <p>Nothing in your calendar</p>\n                    </div>\n                </div>",
                        providers: [calendar_service_1.CalendarService],
                        styles: ["\n        .calendar {\n            display: flex;\n            flex-direction: column;\n        }\n        \n        .calendar-item{\n            margin-bottom: 2rem;\n        }\n        \n        .calendar .title, .calendar .time {\n            display : block;\n        }\n        \n    "]
                    }), 
                    __metadata('design:paramtypes', [calendar_service_1.CalendarService])
                ], CalendarComponent);
                return CalendarComponent;
            }());
            exports_1("CalendarComponent", CalendarComponent);
        }
    }
});
//# sourceMappingURL=calendar.js.map