const { Browser } = require("selenium-webdriver")

var searchWeather = (object, data) => {
    object
        .setValue('@searchBar', data.search)
        .click('@searchButton')
        .waitForElementVisible('@results')
        .verify.containsText('@results', data.result)
        .click('@searchAgain')
}
module.exports = {
 
    beforeEach:    Browser => {
        weather = Browser.url.arrayPage('https://devmountain-qa.github.io/weatherman/build/index.html')
        weather
            .navigate()
    },
    afterEach: Browser => {
            weather
                .end()
    },
searchWeather: [
    { search: '84663', result: 'Springville' },
    { search: '84601', result: 'Provo' }
]
}