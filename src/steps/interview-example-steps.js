const { Given, When, Then } = require("cucumber");
const interviewExample = require("../methods/interview-example-methods.js");


Given('I am on the homepage', async function () {
    await interviewExample.onHomepage();
});
Given('I am on the Account page', async function () {
    await interviewExample.onMyaccount();
});
When('I navigate to the Special Offers page', async function () {
    await interviewExample.onSpecialOffers();
});

When('I view Outbound details', async function () {
    await interviewExample.onOutboundViewDetails();
});

//expecged Fail - element is 0x0 pixels and not visible to TestCafe
When('I change the language of the site to French', async function () {
    await interviewExample.changeLanguageFR();
});

// expected Fail - - element is 0x0 pixels and not visible to TestCafe
When('I change the language of the site to Italian', async function () {
    await interviewExample.changeLanguageIT();
});

When('I login as qatesting@directferries.com', async function () {
    await interviewExample.loginAccount();

});


Then('the header should be in French', async function () {
    await interviewExample.assertLanguageHeaderFR()
});

Then('the header should be in Italian', async function () {
    await interviewExample.assertLanguageHeaderIT()
});

Then('the Outbound details should be correct', async function () {
    await interviewExample.assertOutboundDetails()
});

Then('the Inbound details should be correct', async function () {
    await interviewExample.assertInboundDetails()
});

Then('the Vehicle details should be correct', async function () {
    await interviewExample.assertVehicle()
});

Then('the Passenger details should be correct', async function () {
    await interviewExample.assertLeadPassenger()
    await interviewExample.assertChildPassenger()
});