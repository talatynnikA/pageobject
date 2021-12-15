const {Key, By} = require('selenium-webdriver');
var BasePage = require ('../pageobjects/basepage');

class HomePage extends BasePage{
    goToPage(baseurl){
        this.goToUrl(baseurl);

    }
    LogIn(login, password){
        this.EnterCredentials(login, password);
    }
    EnterSearch(expectedValue) {
        this.findValue(expectedValue);

    }
    CheckFounded(expectedValue, realvalue){
        this.checkValue(expectedValue, realvalue)
    }

}
module.exports = new HomePage();