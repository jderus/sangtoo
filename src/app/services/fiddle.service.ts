import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FiddleService {
    
    constructor(private http:Http) {}
    
    getData() {
        return this.http.get("http://jsonplaceholder.typicode.com/posts")
                   .map((res:Response) => res.json());
    } 
    
    //original to port
    // function getData() {
    //     var url = "http://jsonplaceholder.typicode.com/posts";
    //     return $resource(url).query();
    // }
    
    
    //Fake note
    // getHero(id: number) {
    //     return Promise.resolve(HEROES).then(
    //         heroes => heroes.filter(hero => hero.id === id)[0]
    //     );
    // }
    
    //Fake timing
    // getHeroesSlowly() {
    // return new Promise<Hero[]>(resolve =>
    //     setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    // );
    // }
}