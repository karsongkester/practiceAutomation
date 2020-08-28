var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    // 'ID:4': browser => {
    //         browser
    //         .click('li[name="employee4"]')
    //         .pause(1000)
    //         .verify.containsText('span[name="employeeID"]', 'ID: 4')
    //         .click('input[value="Director of Engineering"]') 
    //         .clearValue('input[value="Director of Engineering"]') 
    //         .setValue('input[name="titleEntry"]' , 'Director of Operations')
    //         .click('#saveBtn')
    // },
    'Employee 1': browser => {
            browser
            .clickByText(browser, 'Bernice Ortiz')
            .pause(1000)
            .click('input[name="nameEntry"]')
            .clearValue('input[name="nameEntry"]')
            .pause(1000)
            .setValue('input[name="nameEntry"]','David Ortiz')
            .click('#saveBtn')
            .pause(1000)
// },
//     'Employee 2': browser => {
//         browser
//         .click('li[name="employee2"]')
//         .pause(1000)
//         .click('input[name="phoneEntry"]')
//         .clearValue('input[name="phoneEntry"]')
//         .useXpath()
//         .setValue('(//input[@class="materialInput"])[2]','8014356789')
//         .useCss()
//         .click('#saveBtn')
//         .pause(1000)
//     },
//     'Add Employee': browser => {
//         browser
//         .click('li[name="addEmployee"]')
//         .pause(2000)
//         .click('li[name="employee11"]')
//         .click('input[name="nameEntry"]')
//         .clearValue('input[name="nameEntry"]')
//         .pause(1000)
//         .setValue('input[name="nameEntry"]','Mike Tyson')
//         .click('#saveBtn')
//         .pause(1000)
}    
}