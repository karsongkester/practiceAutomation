module.exports = {
    before: browser => {
            browser.url('https://www.audible.com/')
    },
    after:  browser => {
        browser.end()
    },
    'free trial': browser => {
        browser
        .useXpath()
        .click('//span[contains(text(), "How does the free trial work")]')
        .pause(1000)
        .useCss()
        .assert.visible('div[class="bc-accordion-inner-content"]')
    },
    'cost': browser => {
        browser
        .useXpath()
        .click('//span[contains(text(), "How much does Audible cost?")]')
        .pause(1000)
        // .useCss()
        // .assert.visible()
        
    },
    'included': browser => {
        browser
        .useXpath()
        .click('//span[contains(text(), "What is included with my Audible membership?")]')
        .pause(1000)
        .useCss()
        .assert.visible('div[class="bc-accordion-inner-content"]')
    },
    'additional benefits': browser => {
        browser
        .useXpath()
        .click('//span[contains(text(), "Are there additional benefits for Amazon Prime members?")]')
        .pause(1000)
        .useCss()
        .assert.visible('div[class="bc-accordion-inner-content"]')
    },
    'cancel': browser => {
        browser
        .useXpath()
        .click('//span[contains(text(), "How do I cancel?")]')
        .pause(1000)
        .useCss()
        .assert.visible('div[class="bc-accordion-inner-content"]')
    },
}
