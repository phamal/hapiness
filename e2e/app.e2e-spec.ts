import { HapinessPage } from './app.po';

describe('hapiness App', () => {
  let page: HapinessPage;

  beforeEach(() => {
    page = new HapinessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
