var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const assert = require("assert");
var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{

    static constructor() {
        global.driver = driver;
    }
    async sleep(){
       await driver.sleep(3000)
    }
    async goToUrl(baseurl){
        await driver.get(baseurl)

    }
    async  EnterCredentials( login, password){
        await driver.findElement(By.id("loginform-login")).sendKeys(login)
        await driver.findElement(By.id("loginform-password")).sendKeys(password)
        await driver.findElement(By.css(".btn_large:nth-child(1)")).click()
        await driver.sleep(3000);

    }
    async  findValue(expectedValue){
        await driver.findElement(By.name("search")).click()
        await driver.findElement(By.name("search")).sendKeys(expectedValue)
        await driver.sleep(3000);
        await driver.findElement(By.css(".item:nth-child(2) > .link")).click()
        await driver.sleep(3000);

    }
    async checkValue(expectedValue, realvalue){
        await driver.sleep(5000);
        realvalue =  driver.findElement(By.css(".page_header_part > .title > h2")).getText()
        alert(realvalue)
        await assert.equal(expectedValue, realvalue);

    }
    async quit(){
        await driver.quit;
    }


}

module.exports = BasePage;