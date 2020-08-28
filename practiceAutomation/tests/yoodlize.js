var yoodlize = {}
module.exports = {
    before: browser => {
        yoodlize = browser.page.yoodlizePage()
        yoodlize
            .navigate()
    },
    after: browser => {
        yoodlize
            .end()
    },
    'Rec Vehicles': browser =>{
            browser
            .click('@See1')
            .assert.elementPresent('@label')
            },
    'Outdoor Gear': browser => {
            browser
            .click('@See2')
            .assert.elementPresent('@label')  
             },
    'Electronics': browser => {
            browser
                .click('@See3')
                .assert.elementPresent('@label')  
    },
    'Party and Wedding': browser => {
            browser
                .click('@See4')
                .assert.elementPresent('@label') 
    },
    'Tools': browser => {
            browser
            .click('@See5')
            .assert.elementPresent('@label') 
    },
    'Clothing': browser => {
            browser
            .click('@See6')
            .assert.elementPresent('@label') 
    },
    'Home and Kitchen': browser => {
    browser
        .click('@See7')
        .assert.elementPresent('@label') 
    },
    'Toys and Games': browser => {
    browser
        .click('@See8')
        .assert.elementPresent('@label') 
    },
    'Lawn and Garden': browser => {
    browser
        .click('@See9')
        .assert.elementPresent('@label') 
    },
    'Sporting Goods': browser => {
    browser
        .click('@See10')
        .assert.elementPresent('@label')
    },
    'DVDs and Video Games': browser => {
    browser
        .click('@See11')
        .assert.elementPresent('@label')  
    },
    'Venues': browser => {
    browser
        .click('@See12')
        .assert.elementPresent('@label') 
    },
    'Music': browser => {
    browser
        .click('@See13')
        .assert.elementPresent('@label')
    },
    'Business Equipment': browser =>{
    browser
        .click('@See14')
        .assert.elementPresent('@label') 
    },
    'Misc': browser =>{
    browser
        .click('@See15')
        .assert.elementPresent('@label')
    },  
}