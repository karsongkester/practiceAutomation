module.exports = {
    url: 'http://localhost:3000/#/enter',
    elements: {


    heightInput: '[name="hgtInput"]'
    ,
    header: '[name="hdrInput"]'
    ,
    mke:  '[name="mkeInput"]'
    ,
    originatingAgency:'[name="oriInput"]'
    , 
    name:  '[name="namInput"]'
    ,
    sex:  '[name="sexInput"]'
    ,
    raceEthnicity:  '[name="racInput"]'
    ,
    weight:  '[name="wgtInput"]'
    ,
    hair: '[name="haiInput"]'
    ,
    offense:  '[name="offInput"]'
    ,
    dateOfWarrant: '[name="dowInput"]'
    ,
    submitButton:  '["#saveBtn"]'
    ,
    results: '[class="results"]'
    ,
    errorMessage: '[id="errorList"]'
    ,
    enterWantedMenuOption: '[name="enterOption"]'
    ,
    navigationMenu: {
        selector: '//button[contains(text() , "Open Menu")]',
        locateStrategy: 'xpath'
    },
    }
}


    // hdrMessage: {
    //     selector:  '//li[contains(text() , "field should be between 9")]'
    // ,
    // mkeMessage:{
    //     selector: '//li[contains(text() , "field should be between 2")]'
    // ,
    // agencyMessage:{
    //     selector: '//li[contains(text() , "The "Originating Agency Identifier" field should be 9 characters long.")]'
    // ,
    // nameMessage:{
    //     selector: '//li[contains(text() , "The "Name" field should be between 3 and 30 characters long")]'
    // ,
    // sexMessage:{
    //     selector: '//li[contains(text() , "The "Sex" field must be included")]'
    // ,
    // raceMessage:{
    //     selector: '//li[contains(text() , "The "Race" field must be included")]'
    // ,
    // hgtMessage:{
    //     selector: '//li[contains(text() , "The "Height" field should be 3 characters long.")]'
    // ,
    // wgtMessage:{
    //     selector: '//li[contains(text() , "The "Weight" should be between 1 and 3 characters long.")]'
    // ,
    // hairMessage:{
    //     selector: '//li[contains(text() , "The "Hair" field should be between")]'
    // ,
    // offenseMessage:{
    //     selector: '//li[contains(text() , "The "Offense" field should be between 5 and 15")]'
    // ,
    // warrantMessage:{
    //     selector: '//li[contains(text() , "The "Date of Warrant" field")]'
    // 