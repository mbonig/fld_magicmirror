import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ImageService {
    constructor(private http:HttpClient) {

    }
    getImage() : Observable<any> {
        return this.http.get<any>('https://0eh00vpuja.execute-api.us-east-1.amazonaws.com/prod');
    }
    

}