// var actions = {click1:'li[name="employee4"]' , click2:'input[value="Director of Engineering"]' , 
// click3:'#saveBtn' , click4: }
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'ID:4': browser => {
            browser
            .click('li[name="employee4"]')
            .pause(1000)
            .verify.containsText('span[name="employeeID"]', 'ID: 4')
            .click('input[value="Director of Engineering"]') 
            .clearValue('input[value="Director of Engineering"]') 
            .setValue('input[name="titleEntry"]' , 'Director of Operations')
            .click('#saveBtn')
    },
    'Employee 1': browser => {
            browser
            .click('li[name="employee1"]')
            .pause(1000)
            .click('input[name="nameEntry"]')
            .clearValue('input[name="nameEntry"]')
            .pause(1000)
            .setValue('input[name="nameEntry"]','David Ortiz')
            .click('#saveBtn')
            .pause(1000)
},
'Employee 2': browser => {
        browser
        .click('li[name="employee2"]')
        .pause(1000)
        .click('input[name="phoneEntry"]')
        .clearValue('input[name="phoneEntry"]')
        .useXpath()
        .setValue('(//input[@class="materialInput"])[2]','8014356789')
        .useCss()
        .click('#saveBtn')
        .pause(1000)
    }
}