const puppeteer =require('puppeteer');

(async ()=>{

    // Mở trình duyệt mới và tới trang của kenh14
    const browser = await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    page.setViewport({width:1280,height:720});
    await page.goto('http://kenh14.vn',{waitUntil:'networkidle2'});
    
    //await page.emulateMedia('screen');
    //await page.pdf({path: 'page.pdf'});
    //await page.screenshot({path:'kenh14.png'});

 // Chạy đoạn JavaScript trong hàm này, đưa kết quả vào biến article

const articles=await page.evaluate(()=>{
    let titlelinks=document.querySelectorAll('h3.knswli-title > a');
    titlelinks =[...titlelinks];
    let article=titlelinks.map(link=>({
        title: link.getAttribute("title"),
        url: link.getAttribute('href')
    }));
    return article;
});


console.log(articles);


    await browser.close();
})();