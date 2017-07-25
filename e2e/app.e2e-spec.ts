import { CPage } from './app.po';

describe('c App', function() {
  let page: CPage;

  beforeEach(() => {
    page = new CPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
