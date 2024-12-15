const { test, expect } = require('@playwright/test');
const caller = require('../utils/commands');
const webElements = require('../utils/webElements');
const getExcelData = require('../utils/excelUtils');
const logger = require('../utils/logger');

const testData = getExcelData('./data/Data.xlsx', 'Sheet1');

test.describe('TS_CommonRun', () => {
    testData.forEach(([searchText], index) => {
        if (searchText) {
            test('tc_SearchTopic['+index+']', async ({ page }) => {
                await caller.open(page, 'https://onlinelibrary.wiley.com/');
                await caller.type(page, webElements.tf_Search, searchText,3000);
                await caller.click(page, webElements.btn_Search,1000);
                const var_TextValue = await caller.getText(page,webElements.lbl_SearchResult,1000); 
            });
        }
    });


    testData.forEach(([username, password], index) => {
        if (username && password) {
            test('tc_UserRegistration['+index+']', async ({ page }) => {
                await caller.open(page, 'https://onlinelibrary.wiley.com/');
                await caller.click(page, webElements.ele_SignupLink,3000);
                await caller.click(page, webElements.ele_AccountType,3000);
                await caller.type(page, webElements.tf_email, 'username@gmail.com',3000);
                await caller.click(page, webElements.btn_Continue,1000);
                await caller.click(page, webElements.btn_SignUp,1000);
            });
        }
    });
});