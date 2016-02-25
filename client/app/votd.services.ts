import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class VerseService {
    constructor(public http:Http) {

    }

    getVerse() {
        return this.http.get('/votd');
    }
}