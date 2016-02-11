import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class WeatherService {
    constructor(public http:Http) {

    }

    getWeather() {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=80120,us&appid=44db6a862fba0b067b1930da0d769e98');

    }


}