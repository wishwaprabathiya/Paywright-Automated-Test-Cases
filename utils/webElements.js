const webElements = {
    btn_Search: { selector: '//button[@type="submit"]', type: 'xpath' },
    tf_Search: { selector: '//input[@type="search"]', type: 'xpath' },
    lbl_SearchResult: { selector: '//div[@class="search__result search__result--space"]', type: 'xpath' },
    ele_SignupLink: { selector: '//span[@class="sign-in-label"]', type: 'xpath' },
    ele_AccountType: { selector: '//a[contains(text(),\'Individual login\')]', type: 'xpath' },
    tf_email: { selector: '//input[@name="email"]', type: 'xpath' },
    btn_Continue: { selector: '//button[@type="submit"]', type: 'xpath' },
    btn_SignUp: { selector: '//button[@id="sign-up-btn"]', type: 'xpath' },  
  };
  
  module.exports = webElements;
  