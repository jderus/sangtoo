import { Component } from 'angular2/core';

@Component({
  selector: 'sang-toy',
  templateUrl: 'toy.component.html'
})
export class ToyComponent {
    public title: string;
    public text: string;
    public data;
    
    constructor() {
        this.title = 'Toy Title';
        this.text = 'Test Text';
    }
    
}