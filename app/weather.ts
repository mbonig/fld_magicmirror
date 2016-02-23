import {Component} from 'angular2/core';
import {WeatherService} from './weather.services';
import 'rxjs/Rx';

@Component({
    selector: 'weather',
    template: '<p *ngFor="#item of weather?.weather">{{item.description}} <img src="http://openweathermap.org/img/w/{{item.icon}}.png"/> </p>',
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
                    console.log(this.weather);
                },
                err => this.logError(err),
                () => console.log('Random Quote Complete')
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}

