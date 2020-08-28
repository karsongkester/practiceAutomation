module.exports = {
    beforeEach: browser => {
        browser.url('https://google.com')
    },
    after: browser => {
        browser.end()
    },
    'Search': browser=> {
        browser
            .setValue('input[name="q"]' , ['polar bears' , browser.Keys.ENTER])
            .click('a[data-sc="I"]')
            .pause(5000)
            .click('img[alt="These award-winning photos show how majestic polar bears are - Insider"]')
            .pause(5000)
    }
}