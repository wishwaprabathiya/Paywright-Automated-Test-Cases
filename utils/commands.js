const logger = require('../utils/logger');

async function open(page, url) {
    try {
        await page.goto(url, { waitUntil: 'load' });
        logger.info('Open command passed');
    } catch (error) {
        logger.error('Open command failed.');
        throw error
    }

}

async function click(page, element, waittime) {
    try {
        await page.locator(element.selector).waitFor({state: 'visible', timeout: waittime});
        const locator = await page.locator(element.selector);
        await locator.click();
        logger.error('Click command Passed.');
    } catch (error) {
        logger.error('Click command failed.');
        throw error
    }
}

async function type(page, element, text, waittime) {
    try {
        await page.locator(element.selector).waitFor({state: 'visible', timeout: waittime});
        const locator = await page.locator(element.selector);
        await locator.fill(text);
        logger.error('Type command failed.');
    } catch (error) {
        logger.error('Type command failed.');
        throw error
    }
}

async function isElementVisible(page, element, waittime) {
    try {
        await page.locator(element.selector).waitFor({state: 'visible', timeout: waittime});
        const locator = await page.locator(element.selector);
        return await locator.isVisible();
    } catch (error) {
        logger.error('Open command failed.');
        throw error
    }
}

async function getText(page, element, waittime) {
    try {
        await page.locator(element.selector).waitFor({state: 'visible', timeout: waittime});
        const gettext = await page.locator(elementSelector).textContent();
        return await gettext;
    } catch (error) {
        logger.error('Open command failed.');
        throw error
    }
}

module.exports = {
    click,
    type,
    isElementVisible,
    open,
    getText
};
