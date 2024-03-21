const { Selector } = require("testcafe");

fixture`Login Tests`
    .page`https://gruppe-782.developerakademie.net/index.html`;


test('Log in as a guest', async t => {
    const guestLoginBtn = Selector('#guest-log-in-btn');
    await t
        .wait(1500)
        .maximizeWindow()
        .expect(guestLoginBtn.innerText).eql('Guest Log in').click(guestLoginBtn)
        .wait(2000)
})


fixture`Hover through summary elements`
    .page`https://gruppe-782.developerakademie.net/summary.html`;

test('Hover summary elements', async t => {
    const hoverElements = [
        '.box-container > .summary-top > .summary-big-box',
        '.box-container > .summary-top > .summary-small-box',
        '.box-container > .summary-bottom >.summary-small-box:nth-child(1)',
        '.box-container > .summary-bottom >.summary-small-box:nth-child(2)',
        '.box-container > .summary-bottom >.summary-small-box:nth-child(3)',
        '.box-container > .summary-bottom >.summary-small-box:nth-child(4)'
    ];
    const userInitials = Selector('#user-initials > div');

    await t.maximizeWindow().wait(2000);
    await t.expect(userInitials.innerText).contains('G').click(userInitials);

    for (const hoverElement of hoverElements) {
        await t.wait(500).hover(hoverElement);
    }

})


fixture`Add Contact`
    .page`https://gruppe-782.developerakademie.net/board.html`;

test('Adding a Contact', async t => {
    const addContactBtn = Selector('button').withText('Add new contact');
    const createNewContactBtn = Selector('button').withText('Create contact');

    await t
        .click('#contactsPage')
    await t
        .expect(addContactBtn.textContent).contains('new contact').click(addContactBtn)
    await t
        .typeText('#addContactName', 'TestCafe2')
        .typeText('#addContactEmail', 'testcafe2@test.de')
        .typeText('#addContactPhone', '012312341234')
    await t
        .expect(createNewContactBtn.textContent).contains('Create contact')
        .click(createNewContactBtn);

})


fixture`Adding a Task`
    .page`https://gruppe-782.developerakademie.net/add_task.html`

test('Entering Title etc. to task', async t => {
    const title = Selector('#add-task-title');
    const description = Selector('#add-task-description');
    const date = Selector('#add-task-date');
    const subTaskInput = Selector('#add-task-subtask-input');
    const addSubTask = Selector('#add-task-subtask-image-container');
    const assigneTestCafe = Selector('.name').withText('TestCafe');
    const technicalTask = Selector('#add-task-category-dropdown > div').withText('Technical Task');

    await t
        .typeText(title, 'Trying out TestCafe').expect(title.value).contains('TestCafe')
        .typeText(description, 'Creating a whole task only using TestCafe').expect(description.value).contains('only using TestCafe')
        .expect(date.exists).ok().typeText(date, '2024-03-22')
        .click('#add-task-urgent')
        .click('#add-task-medium')
        .click('#add-task-low')
        .click('#add-task-assigne')
        .click(assigneTestCafe)
        .click('#searchbar-add-contacts-container > .rotated-image')
        .click('#add-task-category')
        .click(technicalTask)
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


fixture`DeleteContact`
    .page`https://gruppe-782.developerakademie.net/contacts.html`;

test('Deleting a Contact', async t => {
    const contactTestCafe = Selector('h2').withText('TestCafe2');
    const delConact = 'button.profileDel';
    await t
        .click(contactTestCafe)
        .click(delConact)
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