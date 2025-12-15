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
