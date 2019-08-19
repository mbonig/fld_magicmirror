import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WeatherService {
    constructor(public http: HttpClient) {

    }

    getWeather() {
        return this.http.get('https://wr5wn2m2wa.execute-api.us-east-1.amazonaws.com/prod');
    }
}