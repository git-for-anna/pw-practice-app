import { expect, test} from '@playwright/test'


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('extracting values', async({page})=>{
    //single text value
     const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})
    const buttontext = await basicForm.locator('button').textContent()
    expect(buttontext).toEqual('Submit')

    //all text values
   const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
   expect(allRadioButtonsLabels).toContain("Option 1")

   //input value
   const emailField = basicForm.getByRole('textbox', {name:"Email"})
   await emailField.fill('test@test.com')
  const emailValue =  await emailField.inputValue()
  expect(emailValue).toEqual('test@test.com')

  //get the value of the attribute

  const placeholderValue = await emailField.getAttribute('placeholder')
  expect(placeholderValue).toEqual('Email')

})

test('assertions', async({page})=>{
const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')

    //General assertions
    const value = 5
    expect(value).toEqual(5)

    const text = await basicFormButton.textContent()
    expect(text).toEqual('Submit')

    //Locator assertion
    await expect(basicFormButton).toHaveText('Submit')

    //soft assertion
    await expect.soft(basicFormButton).toHaveText('Submit5')
    await basicFormButton.click()

})