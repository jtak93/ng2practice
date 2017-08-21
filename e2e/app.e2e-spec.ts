import { Ng2practicePage } from './app.po';

describe('ng2practice App', () => {
  let page: Ng2practicePage;

  beforeEach(() => {
    page = new Ng2practicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
