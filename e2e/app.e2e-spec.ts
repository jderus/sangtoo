import { SangtooPage } from './app.po';

describe('sangtoo App', () => {
  let page: SangtooPage;

  beforeEach(() => {
    page = new SangtooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
