import {Component} from 'angular2/core';
import {WeatherService} from './weather.services';

@Component({
    selector: 'weather',
    template: '<p>{{data}}</p>',
    providers: [WeatherService]
})
export class WeatherComponent {
    data:Object;
    constructor(private _weatherService:WeatherService) {

    }

    ngAfterContentInit() {
        console.log('going to get the weather...');
        this._weatherService.getWeather()
            //.map(res => res.json())
            .subscribe(
                data => {
                    this.data = data;
                    console.log(this.data);
                },
                err => this.logError(err),
                () => console.log('Random Quote Complete')
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}

