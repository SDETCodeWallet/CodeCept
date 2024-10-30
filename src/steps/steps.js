const { I } = inject();

const { homePage } = require('../pages/homePage');
const { ListingPage } = require('../pages/ListingPage');
const { expect } = require('chai');
const { LiveChatPage } = require('../pages/LiveChatPage');


Given('I open the homepage', async (valueToSearch) => {
    I.amOnPage('https://www.oranum.com/');
    homePage.clickOnAcceptCookies();
    
});

When('I search for {string}', async (valueToSearch) => {
    homePage.checkHomePageLogo();
    homePage.searchInput(valueToSearch); 
});

Then('I should see {string} in the search results', async (valueToVerify) => {
    await expect(await homePage.verifyListOptionIsDisplayed(valueToVerify)).to.be.true;
});

Then('I verify page title contains {string}', async (titleToVerify) => {
    await homePage.checkTitle(titleToVerify);
});

Then('I verify Live experts link is displayed', async () => {
    await homePage.isLiveExpertsLinkDisplayed();
});

When('I click on Search button', async () => {
    homePage.clickOnSearchIcon();
});

Then('I verify the search results contain {string}', async (textToVerify) => {
    await expect(await ListingPage.checkAllExpertsTextContains(textToVerify)).to.be.true;
});

Then('I verify URL contains {string}', async (urlToVerify) => {
   await ListingPage.checkUrl(urlToVerify)
});

Then('I verify only one psychic is displayed in the search results', async () => {
    expect(await ListingPage.getNumberOfExperts()).to.equal(1);
});

Then('I click on Live Experts link', async () => {
    await homePage.clickOnLiveExpertsLink();
});

Then('I click on the first live psychic', async () => {
    await ListingPage.openLiveExpert();
});

Then ('I click on the Sign Up button', async () => {
    await LiveChatPage.clickOnSaySomething();
    await LiveChatPage.clickOnSignUpLink();
});

Then ('I verify the Sign Up overlay is displayed', async () => {
    const expectedOptions= ["Up to 100% Extra Credits\n", "Pick your favorites", "Stay private and secure", "Get personalized suggestions", "Enjoy Sessions with no limits" ]
    await expect(await LiveChatPage.isSignUpOverlayDisplayed(expectedOptions)).to.be.true;
    
});

Then ('I open {string} link', async (categoryLink) => {
    await homePage.openCategory(categoryLink);
});

