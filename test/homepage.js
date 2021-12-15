const homepage = require('../pageobjects/homepage');
const {Builder, By} = require('selenium-webdriver');

describe('This is POM', function(){
    this.timeout(50000);
    beforeEach(function(){

    });

    afterEach(function(){

    });

    it('Search HK50 test', async function(){
        try {
             var  login = "shkolar.neymeka@bk.ru"
            var  password = "V$#C8BZC6Nn*5jr"
            var  expectedValue = "HK50"
             var realvalue
             var url = "https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F";
            baseurl = "https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F";
            var baseurl = "https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F"
            await homepage.goToPage(baseurl)
                  await homepage.sleep();
            await homepage.LogIn(login, password)
            await homepage.sleep();
            await homepage.EnterSearch(expectedValue)
            await homepage.sleep();
            await homepage.CheckFounded(expectedValue, realvalue)

        }
        finally {
            await homepage.quit();
        }
    })
})