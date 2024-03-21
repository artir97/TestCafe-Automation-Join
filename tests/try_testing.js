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

test('testing dropdown', async t => {
    const dropDown = Selector('#option');
    const option1 = Selector('#option > option').withText('Option 1');
    const option2 = Selector('#option > option').withText('Option 2');
    const option3 = Selector('#option > option').withText('Option 3');

    await t
        .expect(dropDown.exists).ok()
        .click(dropDown)

        .expect(option1.exists).ok()
        .expect(option2.exists).ok()
        .expect(option3.exists).ok()

        .click(option2);
})

test('testing selecting', async t => {
    const option1 = Selector('#owc > option').withText('Option 1');
    const option2 = Selector('#owc > option').withText('Option 2');
    const option3 = Selector('#owc > option').withText('Option 3');
    const option4 = Selector('#owc > option').withText('Option 4');

    await t
        .expect(option1.exists).ok()
        .expect(option2.exists).ok()
        .expect(option3.exists).ok()
        .expect(option4.exists).notOk()

        .click(option3);
})

test('testing selecting multiple options', async t => {
    const option1 = Selector('input[type=checkbox][value="Option 1"]');
    const option2 = Selector('input[type=checkbox][value="Option 2"]');
    const option3 = Selector('input[type=checkbox][value="Option 3"]');


    await t
        .expect(option1.exists).ok()
        .expect(option2.exists).ok()
        .expect(option3.exists).ok()

        .expect(option1.value).eql('Option 1')
        .click(option1)

        .expect(option2.value).eql('Option 2')
        .click(option2)

        .expect(option3.value).eql('Option 3')
        .click(option3)
})

test('testing typing', async t => {
    const guessInput = Selector('input[list="datalists"]');

    await t
        .expect(guessInput.exists).ok()
        .scrollBy(0, 700)
        .typeText(guessInput, 'Chocolate');
})

test('testing color choosing', async t => {
    const colorPicker = Selector('#favcolor');

    await t
        .scrollBy(0, 700)
        .expect(colorPicker.exists).ok()
        .click(colorPicker)
})

test.only('testing range', async t => {
    const numberInput = Selector('#quantity');

    await t
        .scrollBy(0, 1000)
        .expect(numberInput.exists).ok()
        .selectText(numberInput).pressKey('delete')
        .typeText(numberInput, '123')

    const numberInputValue = await numberInput.value;

    await t
        .expect(Number(numberInputValue)).gt(1)
})