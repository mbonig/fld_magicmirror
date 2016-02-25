import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class WeatherService {
    constructor(public http:Http) {
    }

    getWeather() {
        return this.http.get('/weather');

    }


}