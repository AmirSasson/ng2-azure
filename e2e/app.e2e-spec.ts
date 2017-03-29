import { FIrstAppPage } from './app.po';

describe('first-app App', () => {
  let page: FIrstAppPage;

  beforeEach(() => {
    page = new FIrstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
