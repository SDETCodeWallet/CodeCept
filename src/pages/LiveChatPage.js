const { I } = inject();
export class LiveChatPage {
    static elements = {
        saySomethingInp: '//div[@data-testid="chatGuestInput"]',
        signupLink: '//span[text()="Sign up for "]',
        signupOverLay: "//div[@data-testid='signUpOverlayApplet']", 
        signupOptionList: "//ul[@class='mc_list mc_list--benefits']//li", 
        benefitsList: "//ul[@class='mc_list mc_list--benefits']//li"
    }

    static async clickOnSaySomething() {
        I.wait(5);
        I.click(this.elements.saySomethingInp);
    }

    static async clickOnSignUpLink() {
        I.waitForVisible(this.elements.signupLink, 30);
        I.click(this.elements.signupLink);
    }

    static async isSignUpOverlayDisplayed(expectedoptions) {
        const actualElementText = new Array ();
        I.waitForVisible(this.elements.signupOverLay, 30);
        I.seeElement(this.elements.signupOverLay);
        const options = await I.grabTextFromAll(this.elements.benefitsList);
        await Promise.all(options.map(async (option) => {
            await actualElementText.push(option);
        }));

        
        return JSON.stringify(actualElementText) === JSON.stringify(expectedoptions);
        
    }
}