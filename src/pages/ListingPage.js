const { I } = inject();

export class ListingPage {
    static elements = {
        experstTileName: '//div[@class="thumb-data-item--name"]',
        expertRecords: '//article[@data-type="performer"]', 
        liveexpert: '//div[text()="Live"]//parent::div/parent::div//parent::a',
    }

    static async checkAllExpertsTextContains(textToVerify) {
        I.waitForVisible(this.elements.experstTileName, 3);
        const options = await I.grabTextFromAll(this.elements.experstTileName);
        const results = await Promise.all(options.map(async (option) => {

            const containsValue = await option.toLowerCase().includes(textToVerify.toLowerCase());

            if (!containsValue) {
                console.log(option);
            }
            return containsValue;
        }));
        return results.every(result => result);
    }

    static checkUrl(urlToVerify) {  
        I.seeInCurrentUrl(urlToVerify);
    }

    static async getNumberOfExperts() {              
        return  await I.grabNumberOfVisibleElements(this.elements.expertRecords);
    }

    static async openLiveExpert() {
        I.click(this.elements.liveexpert);
    }




}