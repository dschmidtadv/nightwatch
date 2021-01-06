
module.exports = {
  'Basic test ' : function(browser) {
    browser
        .url(process.env.NEXT_PUBLIC_VERCEL_URL)
        .waitForElementVisible('body')
        .end();
  }
};


