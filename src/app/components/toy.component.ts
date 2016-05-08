import { Component } from 'angular2/core';
import {FiddleService} from '../services/fiddle.service';

@Component({
  selector: 'sang-toy',
  templateUrl: 'src/app/components/toy.component.html'
})
export class ToyComponent {
    public title :string;
    public text: string;
    public data;
    public err:Boolean = false;
    
    constructor(private _fiddleService: FiddleService) {
        this.title = 'Default Title';
        this.text = 'Default Text';
        this.getData();
    }
    
    getData() {
        this._fiddleService.getData().subscribe(
          data => { this.data = data },
          err  => { this.err = true }  
        );
    }
}