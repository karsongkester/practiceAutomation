
module.exports = {
    beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    after: browser => browser.end(),
    'Problem 1': browser => {
        // Bug in the site, not a problem with code
        browser
            .click('[name="employee7"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'Billy Bob')
            .click('[name="employee9"]')
            .verify.value('[name="nameEntry"]', 'Eve Sparks')
            .click('[name="employee7"]')
            .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    },
        'Problem 2' : browser => {
        browser
        // Error in code.
            .click('[name="employee5"]')
            .clearValue('[name="titleEntry"]')
            .setValue('[name="titleEntry"]', 'Best Manager Ever')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '1234567890')
            .click('#saveBtn')
            .click('[name="employee8"]')
            .expect.element('[name="titleEntry"]').text.to.equal('Best Manager Ever')
            browser
                .click('[name="employee5"]')
                .expect.element('name="phoneEntry"').value.to.equal('1234567890')
            browser
                .expect.element('[name="titleEntry"]').value.to.equal('Best Manager Ever')
    },
        'Problem 3': browser => {
        browser
        // Error in code.
            .click('[name="employee1"]')
            .waitForElementPresent('[name="nameEntry"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'New Person')
            .click('#saveBtn')
            .click('[name="employee2"]')
            .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
        browser
            .click('[name="employee1"]')
            .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
    },
    'Problem 4': browser => {
        browser
        // Bug on site, no error message.
            .click('[name="employee5"]')
            .clearValue('[name="nameEntry"]')
            .click('#saveBtn')
            .assert.containsText('.errorCard', 'The name field must be between 1 and 30 characters long.')
            .assert.value('[name="nameEntry"]', 'Dollie Berry')
    },
    'Problem 5': browser => { 
        // bug in site, and error in code.
        browser
            .click('[name="employee-4"')
            .clearValue('[name="phoneEntry"]')
            .setValue('8015551234')
            .click('[name="cancel"]')
            .click('[name="employee5"]')
            .click('[name="employee-4"]')
            .expect.element('[name="phoneEntry"]').value.to.equal('8015551234')
    }
}