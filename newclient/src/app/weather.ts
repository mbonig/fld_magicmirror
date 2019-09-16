import { Component } from '@angular/core';
import { WeatherService } from './weather.services';
import { Skycons } from './skycons';

console.log('Skycons:', Skycons);

@Component({
    selector: 'weather',
    template: `<div class="days">
                <div class="day" *ngFor="let item of weather?.daily?.data?.slice(0,1); let i = index ">
                    <canvas id="weather-icon-{{i}}" width="300" height="240"></canvas>
                    <p>{{item.summary}}</p>
                    <div class="temp">
                        <p>high: {{item.temperatureMax}}&deg;</p>
                        <p>low: {{item.temperatureMin}}&deg;</p>
                        <p>{{getProb(item)}}&#37; chance of rain</p>
                    </div>
                    
                </div>
               </div>`,
    providers: [WeatherService],
    styles: [`
        
        .days {
            display: flex;
        }
        .days .day {
            flex: 1 1 auto;
            text-align: center;
        }
        p {
            font-size: 1.3rem;
        }
    `]
})
export class WeatherComponent {
    weather: Object;
    iconTranslator: Object;

    constructor(private _weatherService: WeatherService) {
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
        const thirtyMinutes = 30 * 60 * 1000;
        setInterval(() => this.getWeather(), thirtyMinutes);
    }

    getProb(item) {
        return Math.floor(item.precipProbability * 100);
    }

    getWeather() {
        console.log('getting weather');
        var that = this;
        this._weatherService.getWeather()
            .subscribe(
                (data: any) => {
                    this.weather = data;
                    setTimeout(function () {
                        data.daily.data.forEach(function (day, i) {
                            var skycons = new Skycons({ "color": '#fff' });
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

