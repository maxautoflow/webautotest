import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
     //define selectors using getter methods
    get email () {
        return $('#email-address');
    }

    get inputPassword () {
        return $('#current-password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get termsBtn () {
        return $('#explicit-consent-prompt-reject');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.email.setValue(username);
        await this.inputPassword.setValue(password);
        // await this.btnSubmit.click();
    }

    async continueWithoutAccept () {
        await this.termsBtn.click();
    }


}

export default new LoginPage();
