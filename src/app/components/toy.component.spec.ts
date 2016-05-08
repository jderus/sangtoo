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
  
  beforeEachProviders(() => [
    HTTP_PROVIDERS, 
    FiddleService
  ]);
  
  // beforeEach(()=>{
  //   toy = new ToyComponent(); 
  // });
  
  // it('should inject the component',()=> {
  //       expect(toy).toBeDefined();
  // });
  
  // it ('has a title', () => {
  //   expect(toy.title).toBeDefined();
  // });
  
  // it ('has a default title', () => {
  //   expect(toy.title).toBe('Default Title');
  // });
  
  // it ('has a text', () => {
  //   expect(toy.title).toBeDefined();
  // });
  
  // it ('has a default text', () => {
  //   expect(toy.text).toBe('Default Text');
  // });
  
});