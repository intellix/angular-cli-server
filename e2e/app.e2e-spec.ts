import { AngularCliServerPage } from './app.po';

describe('angular-cli-server App', () => {
  let page: AngularCliServerPage;

  beforeEach(() => {
    page = new AngularCliServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
