import {Component} from 'angular2/core';
import {ToyComponent} from './app/components/toy.component';

@Component({
    selector: 'sang',
    directives:  [ToyComponent],
    template: `<h1>Sangtoo is Alive!</h1>
               <hr />
               <sang-toy></sang-toy>
              `
              
})
export class AppComponent { }