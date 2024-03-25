import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect, $, browser} from '@wdio/globals'

import LoginPage from '../pageobjects/loginPage.js';


Given(/^I am on the login page$/, async () => {
    await browser.url('/account/login?clickOrigin=header:home:account');
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Given(/^I click terms continue without accepting$/, async () => {
    if (await browser.$('#explicit-consent-prompt-reject').isDisplayed()){
        await browser.$('#explicit-consent-prompt-reject').click()
    }
});

// Given(/^I click register link$/, async () => {
//     await browser.$('[data-bdd-test-id="registerButton"]').click()
// });
// Given(/^I enter email address$/, async () =>{
//     await browser.$('#email-address').setValue('max@aol.com')
// });
// Given(/^click continue button$/, async () => {
//     await browser.$('.button.button--secondary').click()
//     await browser.pause(1000)
// });
//
// Given(/^I select title$/, async () => {
//     await browser.$('#title').waitForDisplayed()
//     await browser.$('#title').click()
//     await browser.$('#title').selectByVisibleText('Mr');
// });
//
// Given(/^I enter first name$/, async () => {
//     await browser.$('#first-name').setValue('Dave')
// });
//
// Given(/^I enter last name$/, async () => {
//     await browser.$('#last-name').setValue('Sarah')
// });
//
// Given(/^I enter mobile number$/, async () => {
//     await browser.$('#mobile-number').setValue('07867898769');
// });
//
// Given(/^I enter Postcode$/, async () => {
//     await browser.$('#postcode').click();
//     await browser.$('#postcode').setValue('SE1 5AN');
// });
//
// Given(/^click save and continue button$/, async () => {
//     await browser.$('//div[@id=\'main\']/div/div/div/div/div/div/section/div[2]/div/div/div/div/div/form/button').click();
//     await browser.pause(1000)
// });
//
// Given(/^I see title your account info displayed$/, async () => {
//
// });
//
// Given(/^I enter password$/, async () => {
//     await browser.$('#new-password').waitForDisplayed()
//     await browser.$('#new-password').setValue('tODAY001');
//     await browser.pause(1000)
// });
//
// Given(/^I confirm password$/, async () => {
//     await browser.$('#retype-new-password').setValue('tODAY001');
// });