import {Component} from 'angular2/core';
import {WeatherService} from './weather.services';
import 'rxjs/Rx';

declare var Skycons : any;

@Component({
    selector: 'weather',
    template: `<div class="days">
                <div class="day" *ngFor="#item of weather?.daily?.data?.slice(0,3); #i = index ">
                    <canvas id="weather-icon-{{i}}" width="300" height="300"></canvas>
                    <p>{{item.summary}}</p>
                    <div class="temp">
                        <p>low: {{item.temperatureMin}}&deg;</p>
                        <p>high: {{item.temperatureMax}}&deg;</p>
                        <p>{{item.precipProbability * 100}}&#37; chance of rain</p>
                    </div>
                    
                </div>
               </div>`,
    providers: [WeatherService],
    styles: [`
        weather {
            width: 90vw;
        }
        .days{
            display: flex;
        }
        .days .day {
            flex: 1 1 auto;
            text-align: center;
        }
        weather canvas{
            display: block;
        }
        weather .day {
            
        }
    `]
})

export class WeatherComponent {
    weather:Object;
    iconTranslator:Object;

    constructor(private _weatherService:WeatherService) {
// @ts-ignore
        this.iconTranslator = {
	    // @ignore-ts
            "clear-day": Skycons.CLEAR_DAY,
            // @ts-ignore
            "clear-night": Skycons.CLEAR_NIGHT,
// @ts-ignore
            "rain": Skycons.RAIN,
// @ts-ignore
            "snow": Skycons.SNOW,
// @ts-ignore
            "sleet": Skycons.SLEET,
// @ts-ignore
            "wind": Skycons.WIND,
// @ts-ignore
            "fog": Skycons.FOG,
// @ts-ignore
            "cloudy": Skycons.CLOUDY,
// @ts-ignore
            "partly-cloudy-day": Skycons.PARTLY_CLOUDY_DAY,
// @ts-ignore
            "partly-cloudy-night": Skycons.PARTLY_CLOUDY_NIGHT
        };

    }

    ngAfterContentInit() {
        this.getWeather();

        var thirtyMinutes = 30 * 60 * 1000;
        var _this = this;
        var doTheTimeout = function () {
            setTimeout(function () {
                _this.getWeather();
                doTheTimeout()
            }, thirtyMinutes);

        };
        doTheTimeout();

    }

    getWeather() {
        console.log('getting weather');
        var that = this;
        this._weatherService.getWeather()
            .map(res => res.json())
            .subscribe(
                data => {
                    this.weather = data;
                    setTimeout(function () {
                        data.daily.data.forEach(function (day, i) {
// @ts-ignore
                            var skycons = new Skycons({"color": '#fff'});
                            skycons.add(`weather-icon-${i}`, that.iconTranslator[day.icon]);
                        });

                    }, 1000);

                }
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}

