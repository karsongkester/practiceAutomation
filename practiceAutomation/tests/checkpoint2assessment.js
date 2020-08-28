module.exports= {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.0_Assignment/index.html')
    },
    afterEach: browser => {
        browser.end()
    },
'Submit an invalid query': browser => {
    browser.url('https://devmountain-qa.github.io/enter-wanted/1.0_Assignment/index.html')
        .waitForElementPresent('#versionNumber', 5000)
        .setValue('input[name="namInput"]', 'Waldo Butters')
        .setValue('input[name="offInput"]', 'Polka')
        .click('#cancelBtn')
        .expect.element('#errorList').text.to.equal('No results generated due to error.').before(500)
    // this is the one that had the broken link!
}