import {ToyComponent} from './toy.component';
describe('toy.component', () => {
  let toy: ToyComponent;
  
  beforeEach(()=>{
    toy = new ToyComponent(); 
  });
  
  it('should inject the component',()=> {
        expect(toy).toBeDefined();
  });
  
  it ('has a title', () => {
    expect(toy.title).toBeDefined();
  });
  
  it ('has a default title', () => {
    expect(toy.title).toBe('Default Title');
  });
  
  it ('has a text', () => {
    expect(toy.title).toBeDefined();
  });
  
  it ('has a default text', () => {
    expect(toy.text).toBe('Default Text');
  });
  
});