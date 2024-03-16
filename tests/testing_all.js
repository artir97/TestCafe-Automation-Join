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
        .maximizeWindow()
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
        .click('#taskPage')

})


fixture.only`Adding a Task`
    .page`https://gruppe-782.developerakademie.net/add_task.html`

test('Entering Title etc. to task', async t => {
    const title = Selector('#add-task-title');
    const description = Selector('#add-task-description');
    const subTaskInput = Selector('#add-task-subtask-input');
    const addSubTask = Selector('#add-task-subtask-image-container');
    

    await t 
        .wait(1000)
        .typeText(title, 'Trying out TestCafe')
        .wait(1000)
        .typeText(description, 'Creating a whole task only using TestCafe')
        .wait(1000)
        .typeText('#add-task-date', '2024-03-22')
        .wait(1000)
        .click('#add-task-urgent')
        .wait(1000)
        .click('#add-task-medium')
        .wait(1000)
        .click('#add-task-low')
        .wait(1000)
        .click('#add-task-assigne')
        .wait(1000)
        .click(Selector('.name').withText('TestCafe'))
        .wait(1000)
        .click('#searchbar-add-contacts-container > .rotated-image')
        .wait(1000)
        .click('#add-task-category')
        .wait(1000)
        .click(Selector('#add-task-category-dropdown > div').withText('Technical Task'))
        .typeText(subTaskInput, 'This is a subtask created with TestCafe')
        .click(addSubTask)
        .wait(1000)
        .click('#add-task-create-task')
        

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