import {Component} from 'angular2/core';
import {WeatherService} from './weather.services';
import 'rxjs/Rx';

@Component({
    selector: 'weather',
    template: `<div class="temp"><span>{{weather?.currently?.temperature}}</span></div>
               <p >{{weather?.currently?.summary}}</p>`,
    providers: [WeatherService],
    styles: [`
        weather {
            display: flex;
        }
    `]
})
export class WeatherComponent {
    weather:Object;

    constructor(private _weatherService:WeatherService) {
    }

    ngAfterContentInit() {
        this._weatherService.getWeather()
            .map(res => res.json())
            .subscribe(
                data => {
                    this.weather = data;
                }
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}

