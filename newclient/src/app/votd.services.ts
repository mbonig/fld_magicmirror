import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class VerseService {
    constructor(public http:HttpClient) {

    }

    getVerse() {
        return this.http.get('https://6s6wv7hle9.execute-api.us-east-1.amazonaws.com/prod');
    }
}