import { Component, OnInit, AfterViewInit, OnChanges} from '@angular/core';

import * as c3 from 'c3';
import * as _ from 'lodash';

import { StubService } from './services/stub.service';
import { BaconService} from './services/bacon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StubService,BaconService]
})
export class AppComponent {
    title = 'Sangtoo';
    public stubdata;
    public bacondata;

    constructor(private _stub:StubService, private _bacon:BaconService) {
    }

    ngOnInit() {
        this._stub.GetData("test.json").subscribe(
            values => this.stubCallback(values),
            error => console.log(error),
            () => {console.log('Stub GetData Completed'); console.log(this.stubdata);}
        );

        this._bacon.GetData("meat-and-filler",1).subscribe(
            values => this.baconCallback(values),
            error => console.log(error),
            () => {console.log('Bacon GetData Completed'); console.log(this.bacondata);}
        );

    }

    ngAfterViewInit() {}

    stubCallback(it){
        console.log("stubCallback");
        var items = _.take(it,1);
        console.log(items);
        this.stubdata = items[0]["items"];
        this.stubdata = it;
        console.log(this.stubdata);
    }

    baconCallback(it){
        console.log("baconCallback");
        this.bacondata = it;
    }

}
