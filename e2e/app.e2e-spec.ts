import { WishlistFrontEndPage } from './app.po';

describe('wishlist-front-end App', function() {
  let page: WishlistFrontEndPage;

  beforeEach(() => {
    page = new WishlistFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
