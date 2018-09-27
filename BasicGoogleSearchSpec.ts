import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Sample Google Page', () => {
    
    beforeEach(() => {
        browser.waitForAngularEnabled(false);

        browser.get('https://www.google.com/');
    });
    
    it('should have title "Google"', () => {
        var title = browser.getTitle();

        expect(title).toEqual('Google');
    });

    it('should have title "Shalvin - Google Search" when I search for "Shalvin"', () => {
        element(by.name('q')).sendKeys('Shalvin');
        element(by.name('btnK')).click();

        var title = browser.getTitle();

        expect(title).toEqual('Shalvin - Google Search');
    });

});