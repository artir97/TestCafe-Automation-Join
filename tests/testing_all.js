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
        .wait(300)
        .hover('.box-container > .summary-top > .summary-small-box')
        .wait(300)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(1)')
        .wait(300)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(2)')
        .wait(300)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(3)')
        .wait(300)
        .hover('.box-container > .summary-bottom >.summary-small-box:nth-child(4)')
        .wait(300)
        .click('#taskPage')

})


fixture`Adding a Task`
    .page`https://gruppe-782.developerakademie.net/add_task.html`

test('Entering Title etc. to task', async t => {
    const title = Selector('#add-task-title');
    const description = Selector('#add-task-description');
    const subTaskInput = Selector('#add-task-subtask-input');
    const addSubTask = Selector('#add-task-subtask-image-container');


    await t
        .typeText(title, 'Trying out TestCafe')
        .typeText(description, 'Creating a whole task only using TestCafe')
        .typeText('#add-task-date', '2024-03-22')
        .click('#add-task-urgent')
        .click('#add-task-medium')
        .click('#add-task-low')
        .click('#add-task-assigne')
        .click(Selector('.name').withText('TestCafe'))
        .click('#searchbar-add-contacts-container > .rotated-image')
        .click('#add-task-category')
        .click(Selector('#add-task-category-dropdown > div').withText('Technical Task'))
        .typeText(subTaskInput, 'This is a subtask created with TestCafe')
        .click(addSubTask)
        .wait(1000)
        .click('#add-task-create-task')
})

fixture`Board Testings`
    .page`https://gruppe-782.developerakademie.net/board.html`

test('Drag and Drop', async t => {
    const Task = Selector('.taskName').withText('Trying out TestCafe');
    const closeTask = Selector('div').find('img[src="assets/img/close.png"]').parent('div');
    const deleteTask = Selector('div').find('img[src="assets/img/delete.png"]').parent('div');

    await t
        .wait(1000)
        .hover(Task)
        .wait(1000)
        .click(Task)
        .wait(1000)
        .click(closeTask)
        .wait(1000)
        .click(Task)
        .wait(1000)
        .click(deleteTask)
})


fixture.only`Add Contact`
    .page`https://gruppe-782.developerakademie.net/board.html`;

test('Adding a Contact', async t => {

    await t
        .click('#contactsPage')
        .click(Selector('button').withText('Add new contact'))
        .typeText('#addContactName', 'TestCafe2')
        .typeText('#addContactEmail', 'testcafe2@test.de')
        .typeText('#addContactPhone', '012312341234')
        .click(Selector('button').withText('Create contact'))

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