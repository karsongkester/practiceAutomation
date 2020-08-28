var loanApp = {
//     'tomHanks': function (object}, data) {
//     this
//         .click('@start')
//         .setValue(data.kindOfLoan)
//         .setValue(data.property)
//         .click('@nextButton')
//         .click('@nextButton')
//         .click(data.loanFor)
//         .click(data.found)
//         .click(data.agent)
//         .setValue(data.purPrice)
//         .setValue(data.downPay)
//         .click('@nextButton')
//         .click(data.credit)
//         .click(data.bankOrForc)
//         .click('@nextButton')
//         .expect.element('@result').text.to.contain('')
    // },
    'tomCruise': function (data) {
    this
        .click('@start')
        .click('[value="Home Purchase"]')
        .click('[value="Multi Family Dwelling"]')
        .click('[name="nextButton"]')
        .pause(500)
        .setValue('input[name="city"]', 'Orem')
        .click('[name="nextButton"]')
        .click('[value="Primary Home"]')
        .click('[name="yesButton"]')
        .click('[name="yesButton"]')
        .pause(500)
        .setValue('@price', '$300,000')
        .setValue('[name="down"]', '$25,000')
        .pause(500)
        .click('[name="nextButton"]')
        .click('[value="excellent"]')
        .click('[value="Has never been in bankruptcy"]')
        .setValue('input[id="addressOne"]','596 South 1456 West')
        .setValue('input[id="addressThree"]', 'Orem, UT')
        .click('[name="nextButton"]')
        .setValue('input[id="first"]', 'Greg')
        .setValue('input[id="last"]', 'Berry')
        .setValue('input[id="email"]', 'berry.greg@cool.com')
        .click('[name="nextButton"]')
        .click('[name="sendButton"]')
        .expect.element('[class="vert-align"]').text.to.contain('berry.greg@cool.com')
        this
        .expect.element('[class="vert-align"]').text.to.contain('Expect to hear from our corporate lending offices shortly')
    }
}
module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [loanApp],
    elements: {
        start: { 
            selector:'.home-btn'
        },
        loanType1: { 
            selector:'[value="Home Purchase"]'
        },
        loanType2: { 
            selector:'[value="Refinance"]'},
        loanType3: { 
            selector:'[value="Home Equity"]'},
        propType: { 
            selector:'[value="Multi Family Dwelling"]'},
        nextButton: { 
            selector:'[name="nextButton"]'},
        city: { 
            selector:'[name="city"]'},
        loanProp1: { 
            selector:'[value="Primary Home"]'},
        loanProp2: { 
            selector:'[value="Rental Property"]'},
        loanProp3: { 
            selector:'[value="Secondary Home"]'},
        yes: { 
            selector:'[name="yesButton"]'},
        no: { 
            selector:'[name="noButton"]'},
        price: { 
            selector:'[name="price"]'},
        down: { 
            selector:'[name="down"]'},
        eCredit: { 
            selector:'[value="excellent"]'},
        gCredit: { 
            selector:'[value="good"]'},
        fCredit: { 
            selector:'[value="fair"]'},
        pCredit: { 
            selector:'[value="poor"]'},
        noBoF: { 
            selector:'[value="Has never been in bankruptcy"]'},
        bank: { 
            selector:'value="Has had bankruptcy before"]'},
        fore: { 
            selector:'value="Has had a foreclosure before"]'},
        both: { 
            selector:'value="Has had both a foreclosure and a bankruptcy"]'},
        add1: { 
            selector:'#addressOne'},
        add3: { 
            selector:'#addressThree'},
        firstName: { 
            selector:'[id="first"]'},
        lastName: { 
                selector:'[id="last"]'},
        emailInput: { 
                selector:'[id="email"]'},
        result: { 
            selector:'[name="promptText"]'},
        result2: {
            selector:'(//p[contains(text()},"Expect to hear from our corporate lending offices shortly at berry.greg@cool.com.")]'},
            locateStrategy: 'xpath'
        }
    }

