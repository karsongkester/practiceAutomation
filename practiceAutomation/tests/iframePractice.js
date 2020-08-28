
// module.exports = {
//     'Get into the frame, check for the uneditable body':browser=>{
//         browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
//             .waitForElementVisible('#tryhome')
//             .expect.element('body[contenteditable="false"]').not.to.be.present

//         browser
//             .frame('iframeResult')
//         browser
//             .expect.element('body[contenteditable="false"]').to.be.present.before(5000)
//     }
// }

module.exports = {
    'Open in a new window': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
            .waitForElementPresent('#tryhome')
            .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'On original window')
            .frame('iframeResult')
            .click('a')
            .windowHandles(results => {
                var newWindow = results.value[1]
                var originalWindow = results.value[0]
        browser    
                    .switchWindow(newWindow)
                    .verify.urlEquals('https://www.w3schools.com/', 'In new one')
                    .switchWindow(originalWindow)
                    .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'Back to old')
                    .closeWindow()
                    .windowHandles(results => {
                        var handles = results.value
                        browser.verify.ok(handles.length === 1, "there is only one window open.")
                        .switchWindow(newWindow)
                        .verify.urlEquals('https://www.w3schools.com/', 'And it is the new one')
                    })
                    .end()
            })
    }
}