import {ToyComponent} from './toy.component';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {FiddleService} from '../services/fiddle.service';
import {  
    expect, 
    it, 
    inject,
    describe,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';

describe('toy.component', () => {
  let toy: ToyComponent;
  let fiddle: FiddleService;
  
  beforeEachProviders(() => [
    HTTP_PROVIDERS, 
    FiddleService,
    ToyComponent
  ]);
  
  // beforeEach(()=>{
  //   toy = new ToyComponent(); 
  // });
 
   it('should inject the component', inject([FiddleService, ToyComponent], (fiddle: FiddleService, toy: ToyComponent) =>{
         expect(toy).toBeDefined();
   }));
  
  it ('has a title', inject([FiddleService, ToyComponent], (fiddle: FiddleService, toy: ToyComponent) =>{
    expect(toy.title).toBeDefined();
  }));
  
  it ('has a default title', inject([FiddleService, ToyComponent], (fiddle: FiddleService, toy: ToyComponent) =>{
    expect(toy.title).toBe('Default Title');
  }));
  
  it ('has a text', inject([FiddleService, ToyComponent], (fiddle: FiddleService, toy: ToyComponent) =>{
    expect(toy.title).toBeDefined();
  }));
  
  it ('has a default text', inject([FiddleService, ToyComponent], (fiddle: FiddleService, toy: ToyComponent) =>{
    expect(toy.text).toBe('Default Text');
  }));
  
  it('should provide a getData method', inject([FiddleService, ToyComponent], (fiddle: FiddleService, toy: ToyComponent) =>{
         expect(toy.getData).toBeDefined();
   }));
   
   it('should getData ', inject([FiddleService, ToyComponent], (fiddle: FiddleService, toy: ToyComponent) =>{
         toy.getData();
         expect(toy.err).toBe(false);
         expect(toy.data).not.toBe(null);
   }));
  
});