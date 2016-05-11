import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import  'rxjs/Rx';

@Injectable()
export class FiddleService {
    
    constructor(private http:Http) {}
    
    getData() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts")
                   .map((res:Response) => res.json());
    } 
}