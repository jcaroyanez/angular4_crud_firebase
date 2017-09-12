import { Practica01Page } from './app.po';

describe('practica01 App', () => {
  let page: Practica01Page;

  beforeEach(() => {
    page = new Practica01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
