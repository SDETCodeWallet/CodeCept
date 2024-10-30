
const { I } = inject();

export class homePage {

    static elements = {
        pageHeadLogo: '.page-head-logo',
        toolbarAutosuggest: '//ul[@class="toolbar-autosuggest autosuggest"]//li',
        acceptCookiesButton: '//button[text()="Accept Cookies"]',
        searchInp: '.toolbar-search-input',
        searchButton: '.toolbar-search-button',
        liveExpertsLink: '//span[text()="Live Experts"]//parent::a'
    }

    static isLiveExpertsLinkDisplayed() {
        I.waitForVisible(this.elements.liveExpertsLink, 3);
        I.seeElement(this.elements.liveExpertsLink);
    }


    static checkUrl(urlToVerify) {  
        I.seeInCurrentUrl(urlToVerify);
    }

    static async checkHomePageLogo() {
        I.seeElement(this.elements.pageHeadLogo);
    }

    static async checkTitle(titleToVerify) {
        I.seeInTitle(titleToVerify);
    }

    static clickOnAcceptCookies() {
        I.waitForVisible(this.elements.acceptCookiesButton, 3);
        I.click(this.elements.acceptCookiesButton);

    }

    static searchInput(valueToSearch) {
        I.waitForVisible(this.elements.searchInp, 2);
        I.fillField(this.elements.searchInp, valueToSearch);

    }

    static async verifyListOptionIsDisplayed(valueToVerify) {
        I.waitForVisible(this.elements.toolbarAutosuggest, 3);
        const options = await I.grabTextFromAll(this.elements.toolbarAutosuggest);
        const results = await Promise.all(options.map(async (option) => {
            const containsValue = await option.toLowerCase().includes(valueToVerify.toLowerCase());
            if (!containsValue) {
                console.log(option);
            }
            return containsValue;
        }));
        return results.every(result => result);
    }

    static async clickOnSearchIcon() {
        I.click(this.elements.searchButton);
    }

    static async clickOnLiveExpertsLink() {
        I.click(this.elements.liveExpertsLink);
    }

    static async openCategory(category) {
        I.click(`//label[contains(text(),"Category")]//parent::li//ul//li//a[@data-value="${category}"]`);
    }

}