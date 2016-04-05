import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class CalendarService {
    constructor(public http:Http) {

    }

    getCalendar() {
        return this.http.get('/calendar');
    }
}