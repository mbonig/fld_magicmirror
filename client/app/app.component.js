System.register(['angular2/core', './weather', './calendar', './inspiration'], function(exports_1, context_1) {
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
    var core_1, weather_1, calendar_1, inspiration_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_1_1) {
                weather_1 = weather_1_1;
            },
            function (calendar_1_1) {
                calendar_1 = calendar_1_1;
            },
            function (inspiration_1_1) {
                inspiration_1 = inspiration_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'magic-mirror',
                        template: "<div class=\"magic-mirror\">\n                    <weather class=\"full-size\">loading...</weather>\n                    <calendar class=\"full-size\"></calendar>\n                    <inspiration class=\"full-size\"></inspiration>\n                </div>",
                        directives: [weather_1.WeatherComponent, calendar_1.CalendarComponent, inspiration_1.InspirationComponent],
                        styles: ["\n            .magic-mirror {\n                display:flex;\n\n                -webkit-align-items: center;\n                align-items: center;\n                -webkit-justify-content: center;\n                justify-content: center;\n\n                min-height: 95vh;\n            }\n            .magic-mirror .full-size{\n                flex:1 1;\n            }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map