import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export class GoogleSearchResultsPage {
	
	search = (key) => {

        let queryElement = $('[name="q"][type="text"]');
        
        queryElement.clear();

		queryElement.sendKeys(key);

		if(browser.browserName == 'chrome')
			queryElement.submit();
		else
			element(by.name('btnG')).click();

		return this;
	};

	getTitle = () => {
		return browser.getTitle()
	};
};