import { MyrouterPage } from './app.po';

describe('myrouter App', () => {
  let page: MyrouterPage;

  beforeEach(() => {
    page = new MyrouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
