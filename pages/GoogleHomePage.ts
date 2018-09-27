import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import {GoogleSearchResultsPage} from './GoogleSearchResultsPage';

export class GoogleHomePage {
	
	navigate = () => {
		disableAngularCheck();
		browser.get('https://www.google.com/');
	};

	search = (key) => {

		let queryElement = element(by.name('q'));

		queryElement.sendKeys(key);
		
		if(browser.browserName == 'chrome')
			queryElement.submit();
		else
			element(by.name('btnK')).click();

		return new GoogleSearchResultsPage();
	};

	getTitle = () => {
		return browser.getTitle()
	};
};

function disableAngularCheck() {
	browser.waitForAngularEnabled(false);
	browser.ignoreSynchronization = true;
}
