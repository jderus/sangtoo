import {FiddleService} from './fiddle.service';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {  
    expect, 
    it, 
    describe,
    injectAsync,
    TestComponentBuilder,
    beforeEachProvider
} from 'angular2/testing';

describe('fiddle.service', () => {
  let fiddle: FiddleService;
  
  beforeEachProviders(() => [
    HTTP_PROVIDERS, 
    FiddleService
  ]);
  
  beforeEach(inject([FiddleService], s => {
    fiddle = s;
  }));
  
  //crude implementation
  //beforeEach(()=>{
  //  fiddle = new FiddleService(); 
  //});
  
  it('true is true', () => expect(true).toEqual(true));
  
  it('should inject the service',()=> {
        expect(fiddle).toBeDefined();
  });
  
  it('should have the getData call', function () {
        expect(fiddle.getData).toBeDefined();
  });
  
  it('should return true for getData', function () {
        let value = fiddle.getData();
        expect(value).toBe(true);
  });
  
});