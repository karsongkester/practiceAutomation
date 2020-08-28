// A set of steps that will provide the inputs/conditions and check the results.
// An array that contains combinations of inputs and expected results for each decision rule.
// If the loan is for purchasing a primary home, Steve will handle it.

// To handle a purchase of a secondary or rental property, Jan will take care of them.

// For HELOC or Refinance purposes, route the customer to the corporate lending offices.

// For any multi-family dwelling, have our business banker Mike contact the customer, and provide his info.

// If the customer has Fair or Poor credit, OR has a bankruptcy or foreclosure, reject the application out of hand.

// If the customer has both a bankruptcy and a foreclosure, provide the email for our financial counselling services.

// For any cash purchases, route to Stella, and for any down payment of $250k or higher, loop in Melissa.

var data = [
    // {loanFor:'Primary Home' , result: 'Steve'},
    // {loanFor: 'Rental Property', result:'Jan'},
    // {loanFor: 'Secondary Home', result: 'Jan'},
    // {kindOfLoan: 'Home Equity'  , result: 'corporate lending'},
    // {kindOfLoan: 'Refinance' , result: 'corporate lending'},
    // {propType:'Multi Family Dwelling', result: 'Mike'},
    // {credit:'Fair',   result: 'reject'},
    // {credit: 'Poor', result: 'reject'},
    // {credit:  'Bankruptcy', result: 'reject'},
    // {credit:'Foreclosure', result: 'reject'},
    // {kindOfLoan:'cash', result: 'Stella'},
    // {purPrice:'$250,000', result:"Melissa"},
    {emailInput: 'berry.greg@cool.com', result: '@result'}

]
var loan = {}
module.exports= {
    beforeEach: browser =>{
        loan = browser.page.loanPage()
        loan
        .navigate()
    },
    after: browser =>{
        loan
        .end()
    },
    // 'Steve': browser =>{
    //     loanApp(loan, data[0])
    // },
    'LoanWeb': browser=>{
        data.forEach(test=>{
            loan.tomCruise(test)
        })
    }
}