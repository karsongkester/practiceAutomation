module.exports= {
    before: browser => {
        browser.url('https://www.amazon.com/')
    },
    after: browser => {
        browser
        .end()
    },
    'Search': browser => {
        browser
        .setValue('#twotabsearchtextbox', ['Lord of the Rings', browser.Keys.ENTER])
        .useXpath()
        .getText('//span[contains(text(),"The Lord Of The Rings: The Fellowship Of The Ring")]', function(result){
        console.log(result.value)
        })
    }
}