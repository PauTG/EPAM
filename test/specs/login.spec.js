// import expect from '@wdio/globals';
// import loginPage, { open, loginButton, getErrorMessageText, usernameInput, login, logo as _logo } from '../pageobjects/login.page';
const loginpage = require('../pageobjects/login.page')

describe('Test de Swag Labs', () => {

    beforeEach(async () => {
        await loginpage.open()
    });

it('UC1', async () => {
    await loginpage.loginButton.click()
        const errorMsg = await loginpage.getErrorMessageText(); 
        await expect(errorMsg).toContain('Username is required'); 
    });

it('UC2', async() => {
    await loginpage.usernameInput.setValue("standard_user");
    await loginpage.loginButton.click();

    const error = await loginpage.getErrorMessageText();
    await expect(error).toContain("Password is required");
})
 it ('UC3', async() => {
    await loginpage.login("standard_user", "secret_sauce");

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('inventory.html');

    
    const logo = await loginpage.logo;
    await expect(logo).toBeDisplayed();
    await expect(logo).toHaveText("Swag Labs");
 })
});

