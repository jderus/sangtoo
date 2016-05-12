import { Component } from 'angular2/core';
import {FiddleService} from '../services/fiddle.service';
import {MyUppercasePipe} from '../pipes/my-uppercase.pipe';
import {SangSearchPipe} from '../pipes/sang-search.pipe';

@Component({
  selector: 'sang-toy',
  pipes: [MyUppercasePipe, SangSearchPipe],
  templateUrl: 'src/app/components/toy.component.html'
})
export class ToyComponent {
    public title :string;
    public text: string;
    public data;
    public err:Boolean = false;
    
    public sortType: string     = 'id';
    public sortReverse: Boolean = false;
    public searchGrid;
    
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