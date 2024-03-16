const { Selector } = require("testcafe");

fixture`Login Tests`
    .page`https://gruppe-782.developerakademie.net/index.html`;


test('Log in as a guest', async t => {
    // const guestLoginBtn = Selector('button').withText('Guest Log in');
    const guestLoginBtn = Selector('#guest-log-in-btn');
    await t
        .wait(1500)
        .maximizeWindow()
        .click(guestLoginBtn)
        .wait(2000)
})


fixture`Hover through summary elements`
    .beforeEach(async t => {
        await t.navigateTo('https://gruppe-782.developerakademie.net/summary.html');
    });

test('Hover summary elements', async t => {
    await t
        .wait(2000)
        .hover(`.box-container > .summary-top > .summary-big-box`)
        .wait(1500)
        .hover('.box-container > .summary-top > .summary-small-box')
        .wait(1500)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(1)')
        .wait(1500)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(2)')
        .wait(1500)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(3)')
        .wait(1500)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(4)')
        .wait(1500)

})



fixture`Logout Tests`
    .page`https://gruppe-782.developerakademie.net/summary.html`;

test('Log out', async t => {
    const navBarDropDown = Selector('#user-initials');
    const logOut = Selector('#navbar-dropdown > li:nth-child(3)');
    await t
        .wait(1500)
        .click(navBarDropDown)
        .wait(1500)
        .click(logOut)
})