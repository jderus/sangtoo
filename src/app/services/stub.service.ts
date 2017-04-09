import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StubService {
  private url:string;

  constructor(private _http: Http) {
    this.url = "./json/";
   }

   public GetData = (predicate): Observable<any> => {
     return this._http.get(this.url+predicate)
            .map((response: Response) => <any>response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
}
