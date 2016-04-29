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
  
  it ('has a text', () => {
    expect(toy.title).toBeDefined();
  });
  
});