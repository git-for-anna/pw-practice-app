import { test} from '@playwright/test'


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('locating child elements', async({page})=>{
    // await page.locator('nb-card nb-radio :test-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()

    await page.locator('nb-card').nth(3).getByRole('button').click() // index.. remember it always starts with the 0 . Try to avoid this method

 
})