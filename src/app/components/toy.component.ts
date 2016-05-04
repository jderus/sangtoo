import { Component } from 'angular2/core';

@Component({
  selector: 'sang-toy',
  templateUrl: 'src/app/components/toy.component.html'
})
export class ToyComponent {
    public title :string;
    public text: string;
    public data;
    
    constructor() {
        this.title = 'Default Title';
        this.text = 'Default Text';
    }
    
}