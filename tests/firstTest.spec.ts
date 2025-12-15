import { test} from '@playwright/test'


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async({page})=>{
    // by Tag name
    page.locator('input')

    // by id # sign should be used
    await page.locator('#inputEmail').click()

    // by class . before the test says that playwright should look for class
    page.locator('.shape-rectangle')

    // by attribute
    page.locator('[placeholder="Email"]')

    //by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selectors (combine two or more elements together, do NOT use space between them)
    page.locator('input[placeholder="Email"][nbinput]')

    // by Xpath (NOT RECOMMENDED)
    page.locator('//*[@id="inputEmail"]')

    // by partial text match
    page.locator(':text("Using")')

    // by exact text match
    page.locator(':text-is("Using the Grid")')
})

import{test} from '@playwright/test'

test.beforeEach(async({page})=>{
await page.goto('http://localhost:4200/')
})

test('the first test', async ({page}) => {
    await page.getByText('Form layouts').click()
})

test('navigate to datepicker', async ({page}) => {
    await page.getByText('Form layouts').click()
    
})

test.describe('suite1', ()=>{
    test.beforeEach(async({page})=>{
    await page.getByText('Charts').click()
})

test('the first test1', async ({page}) => {
    await page.getByText('Form layouts').click()
})

test('navigate to datepicker page1', async ({page}) => {
    await page.getByText('Datepicker').click()
    
})
})
