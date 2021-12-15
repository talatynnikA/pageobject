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

    async MoveToСurrencies(){
        await driver.sleep(5000);
        await driver.findElement(By.linkText("Валюты")).click()
    }

    async AddElementToFavorite(){
        var expectedElement = driver.findElement(By.xpath("/html/body/div[1]/main/div/div[1]/section/div/div[4]/div/div[1]/div/div[2]")).getText()
        await driver.findElement(By.css(".bookmark_link:nth-child(6) .icon_star")).click()
        {
            const element = await driver.findElement(By.linkText("Избранное"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        return expectedElement
    }

    async CheckFavorite(){
        await driver.findElement(By.linkText("Избранное")).click()
        var realvalue = driver.findElement(By.xpath("/html/body/div[1]/main/div/div[1]/section/div/div[2]/div/div[1]/div/div[2]")).getText()
        await assert.equal(expectedValue, realvalue);
    }
    async RmFromFav(){
        await driver.findElement(By.css(".card:nth-child(2) .bookmark_link .icon")).click()

    }

}

module.exports = BasePage;