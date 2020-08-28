var inter = {}
var erray = [
    { num: '1', res: 'Recreational Vehicles' },
    { num: '2', res: 'Outdoor Gear' },
    { num: '3', res: 'Electronics' },
    { num: '4', res: 'Party & Wedding Equipment'},
    { num: '5', res: 'Tools'},
    { num: '6', res: 'Clothing'}
]


module.exports = {
    beforeEach: browser => {
        inter = browser.page.cusCmndPage()
        inter
        .navigate()
        inter
        .resizeWindow(1920, 1080)
    },
    after: browser => {
        inter
        .end()
    },

    // 'interpo': browser => {
    //   inter
    //   .willFerrel(erray[0])
    // },
    // 'yood': browser => {
    //     inter
    //     .antMan(erray[1])
    'Inter': browser=>{
        erray.forEach(test=>{
           inter.willFerrel(test)
        })
     },
}