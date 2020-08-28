var errorCheck = (object, data, error) => {
    object
        .click(data.navMenu)
        .click(data.enterWantedMenuOption)
        .setValue('@header', data.header,)
        .setValue('@mke', data.mke,)
        .setValue('@originatingAgency', data.originatingAgency,)
        .setValue('@name', data.name,)
        .setValue('@sex', data.sex,)
        .setValue('@raceEthnicity', data.raceEthnicity,)
        .setValue('@heightInput', data.heightInput,)
        .setValue('@weight', data.weight,)
        .setValue('@hair', data.hair,)
        .setValue('@offense', data.offense,)
        .setValue('@dateOfWarrant', data.dateOfWarrant,)
        .expect.element(error.message).to.not.be.visible
    object
        .click(data.submitButton)
}
var enterWantedQ = {}
module.exports = {
    beforeEach: browser => {
    enterWantedQ = browser.page.enterWantedFunctionPage()
    enterWantedQ
        .navigate()
},
    after: browser => {
        enterWantedQ
            .end()
    },
'error': browser =>{
    errorCheck(enterWantedQ,{
        navMenu: '@navigationMenu',
        enterWantedMenuOption: '@enterWantedMenuOption',
        header: 'absdfghji',
        mke:'ak',
        originatingAgency:'989838485',
        name:'Joe',
        sex:'Male',
        raceEthnicity:'Unknown',
        heightInput:'501',
        weight:'225',
        hair:'Red',
        offense:'Battery',
        dateOfWarrant:'12/29/20',
        message:'@errormessage',
        submitButton:'@submitButton'
    })
},
}