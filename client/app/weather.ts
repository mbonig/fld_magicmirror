import {Component} from 'angular2/core';
import {WeatherService} from './weather.services';
import 'rxjs/Rx';

@Component({
    selector: 'weather',
    template: `<canvas id="weather-icon" width="300" height="300"></canvas>
               <p>{{weather?.currently?.summary}}</p>
               <div class="temp">
                    <p>{{weather?.currently?.temperature}}&deg;</p>
                    <p>{{weather?.currently?.precipProbability}}&#37; chance of rain</p>
               </div>
               <p>{{weather?.hourly?.summary}}</p>
               `,
    providers: [WeatherService],
    styles: [`
        weather {
            display: flex;
        }
    `]
})
export class WeatherComponent {
    weather:Object;
    iconTranslator:Object;

    constructor(private _weatherService:WeatherService) {
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

    ngAfterContentInit() {
        this.getWeather();

        var thirtyMinutes = 30*60*1000;
        var _this = this;
        var doTheTimeout = function(){
            setTimeout(function () {
                _this.getWeather();
                doTheTimeout()
            }, thirtyMinutes);

        };
        doTheTimeout();

    }

    getWeather() {
        console.log('getting weather');
        var skycons = new Skycons({"color": '#fff'});
        this._weatherService.getWeather()
            .map(res => res.json())
            .subscribe(
                data => {
                    this.weather = data;
                    skycons.add("weather-icon", this.iconTranslator[data.currently.icon]);
                }
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}

