import {GoogleHomePage} from './pages/GoogleHomePage';

describe('Sample Google Page', () => {
    
    let googleHomePage: any;

    beforeEach(() => {
        googleHomePage = new GoogleHomePage();
        googleHomePage.navigate();
    });
    
    it('should show default page title for home page', () => {

        expect(googleHomePage.getTitle()).toEqual('Google');
    });

    it('should show search keyword in page title for search results page when searching from home page', () => {
        
        let query = 'Shalvin';

        let googleSearchResultsPage = googleHomePage.search(query);

        expect(googleSearchResultsPage.getTitle()).toEqual(query + ' - Google Search');
    });

    it('should show search keyword in page title for search results page when searching from search results page', () => {
        
        let query1 = 'Shalvin';
        let query2 = 'Shalvin Abraham';

        let googleSearchResultsPage = googleHomePage.search(query1);
        
        googleSearchResultsPage.search(query2);

        expect(googleSearchResultsPage.getTitle()).toEqual(query2 + ' - Google Search');
    });
});