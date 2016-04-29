import {FiddleService} from './fiddle.service';

describe('fiddle.service', () => {
  let fiddle: FiddleService;
  
  beforeEach(()=>{
    fiddle = new FiddleService(); 
  });
  
  it('true is true', () => expect(true).toEqual(true));
  
  it('should inject the service',()=> {
        expect(fiddle).toBeDefined();
  });
  
  it('should have the getData call', function () {
        expect(fiddle.getData).toBeDefined();
  });
  
});