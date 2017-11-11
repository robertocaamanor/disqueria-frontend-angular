import { DisqueriaAngularPage } from './app.po';

describe('disqueria-angular App', function() {
  let page: DisqueriaAngularPage;

  beforeEach(() => {
    page = new DisqueriaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
