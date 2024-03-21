const { Selector } = require("testcafe");

fixture`Try Testing`
    .page`https://trytestingthis.netlify.app/`;

test('testing login', async t => {
    const userNameInput = Selector('#uname');
    const passWordInput = Selector('#pwd');
    const logInBtn = Selector('.login > input[type=submit][value="Login"]');

    await t
        .typeText(userNameInput, 'test')
        .expect(userNameInput.value).eql('test')

        .typeText(passWordInput, 'test')
        .expect(passWordInput.value).eql('test')

        .expect(logInBtn.exists).ok()
        .click(logInBtn);
})

test('testing clicking', async t => {
    // Set native dialog hanlder for alerts 
    await t.setNativeDialogHandler(() => true);

    const doubleClickBtn = Selector('button').withText('Double-click me');
    const alertBtn = Selector('button').withText('Your Sample Alert Button!');

    await t
        .expect(doubleClickBtn.exists).ok()
        .doubleClick(doubleClickBtn)

        .expect(alertBtn.exists).ok()
        .click(alertBtn);
})

test('testing drag and drop', async t => {
    const elementToDrag = Selector('#drag1');
    const placeToDrop = Selector('#div1');

    await t
        .expect(elementToDrag.exists).ok()
        .expect(placeToDrop.exists).ok()

        .dragToElement(elementToDrag, placeToDrop);
})

test('hovering', async t => {
    const elementToHover = Selector('.tooltip').withText('Sample Tooltip');

    await t
        .expect(elementToHover.exists).ok()
        .expect(elementToHover.textContent).contains('Sample Tooltip')
        .hover(elementToHover);
})

test('testing filling name', async t => {
    const firstNameInput = Selector('#fname');
    const lastNameInput = Selector('#lname');

    await t
        .expect(firstNameInput.exists).ok()
        .expect(lastNameInput.exists).ok()

        .typeText(firstNameInput, 'Artir')
        .expect(firstNameInput.value).eql('Artir')

        .typeText(lastNameInput, 'Guri')
        .expect(lastNameInput.value).eql('Guri');
})

test('testing choosing gender', async t => {
    const radioMale = Selector('#male');
    const radioFemale = Selector('#female');
    const radioOther = Selector('#other');
    const radioDoesNotExist = Selector('#doesNotExist');
    
    await t
        .expect(radioMale.exists).ok()
        .expect(radioMale.value).eql('male')

        .expect(radioFemale.exists).ok()
        .expect(radioFemale.value).eql('female')

        .expect(radioOther.exists).ok()
        .expect(radioOther.value).eql('other')

        .expect(radioDoesNotExist.exists).notOk()

        .click(radioMale);
})