import { SangSearchPipe } from './sang-search.pipe';
describe('SangSearchPipe', () => {
  let pipe: SangSearchPipe;
  beforeEach(() => {
    pipe = new SangSearchPipe();
  });
  it('is alive! true is true', () => expect(true).toEqual(true));
  it('transforms null to null', () => {
    expect(pipe.transform(null,[])).toEqual(null);
  });
});