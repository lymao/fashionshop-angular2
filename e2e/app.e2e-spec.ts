import { FashionshopAngular2Page } from './app.po';

describe('fashionshop-angular2 App', () => {
  let page: FashionshopAngular2Page;

  beforeEach(() => {
    page = new FashionshopAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
