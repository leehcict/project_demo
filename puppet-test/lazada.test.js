let puppeteer = require('puppeteer');
let browser=null;
let page=null;

describe('Lazada test',()=>{
    beforeAll(async()=>{
        browser = await puppeteer.launch();
        page=await browser.newPage();
        await page.setViewport({
            width:1280,
            height: 720
        });
        // mac dinh, timeout cua jest la 5s

        jest.setTimeout(60000);
    });
    //dong trinh duyet
    afterAll(async()=>{
        await browser.close();
    });

    // truoc khi chay moi test case, vao trang chu cua lazada
    beforeEach(async()=>{
        await page.goto('https://www.lazada.vn');
    });


    test('Search sexy underwear',async()=>{
        expect.assertions(1);
        //tim khung search, go sexy underwear
        const searhBox=await page.$('#q');
        await searhBox.type('sexy underwear');
        await searhBox.press('Enter');
    
        //Cho trang load xong, tim cac phan tu item va dem
    
        await page.waitForNavigation();
    
        const products= await page.$$('div[data-qa-locator=product-item]');
        expect(products.length).toBe(40);
    
    });
    
    test('Install app',async()=>{
        expect.assertions(1);
    
        //tim va click vao link
        const appDownloadLink =  await page.$x('//*[@id="topActionDownload"]');
        await appDownloadLink[0].click();
        await page.waitForNavigation();
    
        const breadCrumbHandle = await page.$x('/html/body/header/footer/div[2]/div[1]/ul/li[2]/span');
    const text=await page.evaluate(e=>e.innerText,breadCrumbHandle[0]);
    //check noi dung element do co chu app mobile tai lazada
    expect(text).toContain('App Mobile tại Lazada');
    });

});

