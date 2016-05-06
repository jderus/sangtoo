import {FiddleService} from './fiddle.service';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {  
    expect, 
    it, 
    inject,
    describe,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';

describe('fiddle.service', () => {
  let fiddle: FiddleService;
  
  beforeEachProviders(() => [
    HTTP_PROVIDERS, 
    FiddleService
  ]);
  
  // would like to get rid of redundant inject, but this is giving a ts error.
  // beforeEach(inject([FiddleService], s => {
  //   fiddle = s;
  // }));
  
  //crude implementation
  //beforeEach(()=>{
  //  fiddle = new FiddleService(); 
  //});
  
  it('true is true', () => expect(true).toEqual(true));
  
  it('should inject the service', inject([FiddleService], (fiddle: FiddleService)=> {
        expect(fiddle).toBeDefined();
  }));
  
  it('should have the getData call', inject([FiddleService], (fiddle: FiddleService)=> {
        expect(fiddle.getData).toBeDefined();
  }));
  
  it('should return true for getData', inject([FiddleService], (fiddle: FiddleService)=>{
        // let value = fiddle.getData();
        // expect(value).toBe(true);
      fiddle.getData().subscribe(x => { 
      expect(x.length).toBeGreaterThan(0);
      
      //this doesnt work because we cant inject in beforeEach, and I can't figure out how to do both inline
      //done(); 
    });
        
  }));
  
});