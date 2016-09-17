import { LocationInfoAppPage } from './app.po';

describe('location-info-app App', function() {
  let page: LocationInfoAppPage;

  beforeEach(() => {
    page = new LocationInfoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
