System.register(['@angular/core', './weather.services'], function(exports_1, context_1) {
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
    var core_1, weather_services_1;
    var WeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_services_1_1) {
                weather_services_1 = weather_services_1_1;
            }],
        execute: function() {
            WeatherComponent = (function () {
                function WeatherComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.iconTranslator = {
                        "clear-day": Skycons.CLEAR_DAY,
                        "clear-night": Skycons.CLEAR_NIGHT,
                        "rain": Skycons.RAIN,
                        "snow": Skycons.SNOW,
                        "sleet": Skycons.SLEET,
                        "wind": Skycons.WIND,
                        "fog": Skycons.FOG,
                        "cloudy": Skycons.CLOUDY,
                        "partly-cloudy-day": Skycons.PARTLY_CLOUDY_DAY,
                        "partly-cloudy-night": Skycons.PARTLY_CLOUDY_NIGHT
                    };
                }
                WeatherComponent.prototype.ngAfterContentInit = function () {
                    this.getWeather();
                    var thirtyMinutes = 30 * 60 * 1000;
                    var _this = this;
                    var doTheTimeout = function () {
                        setTimeout(function () {
                            _this.getWeather();
                            doTheTimeout();
                        }, thirtyMinutes);
                    };
                    doTheTimeout();
                };
                WeatherComponent.prototype.getWeather = function () {
                    var _this = this;
                    console.log('getting weather');
                    var that = this;
                    this._weatherService.getWeather()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.weather = data;
                        setTimeout(function () {
                            data.daily.data.forEach(function (day, i) {
                                var skycons = new Skycons({ "color": '#fff' });
                                skycons.add("weather-icon-" + i, that.iconTranslator[day.icon]);
                            });
                        }, 1000);
                    });
                };
                WeatherComponent.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'weather',
                        template: "<div class=\"days\">\n                <div class=\"day\" *ngFor=\"#item of weather?.daily?.data?.slice(0,3); #i = index \">\n                    <canvas id=\"weather-icon-{{i}}\" width=\"300\" height=\"300\"></canvas>\n                    <p>{{item.summary}}</p>\n                    <div class=\"temp\">\n                        <p>low: {{item.temperatureMin}}&deg;</p>\n                        <p>high: {{item.temperatureMax}}&deg;</p>\n                        <p>{{item.precipProbability * 100}}&#37; chance of rain</p>\n                    </div>\n                    \n                </div>\n               </div>",
                        providers: [weather_services_1.WeatherService],
                        styles: ["\n        weather {\n            width: 90vw;\n        }\n        .days{\n            display: flex;\n        }\n        .days .day {\n            flex: 1 1 auto;\n            text-align: center;\n        }\n        weather canvas{\n            display: block;\n        }\n        weather .day {\n            \n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [weather_services_1.WeatherService])
                ], WeatherComponent);
                return WeatherComponent;
            }());
            exports_1("WeatherComponent", WeatherComponent);
        }
    }
});
//# sourceMappingURL=weather.js.map