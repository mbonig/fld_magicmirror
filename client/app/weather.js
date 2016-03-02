System.register(['angular2/core', './weather.services', 'rxjs/Rx'], function(exports_1, context_1) {
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
            },
            function (_1) {}],
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
                    var _this = this;
                    this._weatherService.getWeather()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.weather = data;
                        skycons.add("weather-icon", _this.iconTranslator[data.currently.icon]);
                    });
                    var skycons = new Skycons({ "color": '#fff' });
                };
                WeatherComponent.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'weather',
                        template: "<canvas id=\"weather-icon\" width=\"300\" height=\"300\"></canvas>\n                <div class=\"temp\">\n               <span>{{weather?.currently?.temperature}}&deg;</span>\n               </div>\n               <p>{{weather?.currently?.summary}}</p>",
                        providers: [weather_services_1.WeatherService],
                        styles: ["\n        weather {\n            display: flex;\n        }\n    "]
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