const { $ } = require('@wdio/globals')

class LoginPage{
    get usernameInput(){
        return $('#user-name')
    }
    get passwordInput(){
        return $('#password')
    }
    get loginButton(){
    return $('#login-button')
    }
    get errorMessage(){
        return $('//h3[@data-test="error"]')
    }
    get logo(){
        return $('.app_logo')
    }

    async open() {
        await browser.url('https://www.saucedemo.com/')
    }

    async login(username,password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessageText(){
        await this.errorMessage.waitForDisplayed({ timeout: 5000, timeoutMsg: 'El mensaje de error no apareció después de 5s.' });
        return await this.errorMessage.getText();
        
    }

    async clearCredentials(){
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
    }
}


module.exports = new LoginPage();
