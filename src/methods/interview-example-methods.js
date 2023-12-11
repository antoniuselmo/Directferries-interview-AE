const { Selector, t, ClientFunction } = require('testcafe');

module.exports = {
    onHomepage: async function () {
        await t
            .navigateTo('https://www.directferries.co.uk')
            .browser
        //.maximizeWindow()
    },

    onMyaccount: async function () {
        await t
            .navigateTo('https://account.directferries.com/?culture=en-GB')
    },


    onSpecialOffers: async function () {
        await t
            .click('#specialOffers')
    },
    onOutboundViewDetails: async function () {
        await t
            .click('[data-qa="outbound-view-booking"]')
    },
    changeLanguageFR: async function () {
        await t
            .click('.flag')
            .wait(1000)
            .click('.fr-FR')
    },
    changeLanguageIT: async function () {
        await t
            .click('.flag')
            .wait(1000)
            .click('.it-IT')
    },


    // funxtion woraround for flag selector - resizing element to be clickable
    changeLanguageCFFR: async function () {
        const setHight = ClientFunction(selector => {
            const el = document.querySelector(selector);
            el.style.width = '5px';
            el.style.height = '5px';
        })
        await t
            .wait(10000)

        await setHight('.flag')

        await t
            .click('.flag')
            .wait(1000)
        await setHight('.fr-FR')
        await ClientFunction(() => {
            document.querySelector('.fr-FR').click()
        })();
    },

    loginAccount: async function () {
        await t
            .typeText('#Email', 'qatesting@directferries.com')
            .typeText('#BookingReference', 'DFP164826683')
            .click('#manage-booking-button')
    },
    assertLanguageHeaderFR: async function () {
        await t
            .expect(Selector('#ferryTickets').innerText).eql('Billet de bateau')
            .takeScreenshot();
    },
    assertLanguageHeaderIT: async function () {
        await t
            .expect(Selector('#ferryTickets').innerText).eql('Prenotazione traghetti')
            .takeScreenshot();
    },

    assertOutboundDetails: async function () {
        await t
            .expect(Selector('.visual-ticket section:nth-of-type(2) [data-qa="passenger-count"]').innerText).eql(' 2')
            .expect(Selector('.visual-ticket section:nth-of-type(2) [data-qa="vehicle-count"]').innerText).eql(' 1')
            .takeScreenshot();
    },

    assertInboundDetails: async function () {
        await t
            .expect(Selector('.visual-ticket section:nth-of-type(3) [data-qa="passenger-count"]').innerText).eql(' 1')
            .expect(Selector('.visual-ticket section:nth-of-type(3) [data-qa="vehicle-count"]').innerText).eql(' 1')
            .takeScreenshot();
    },
    assertVehicle: async function () {
        await t
            .expect(Selector('[data-qa="vehicle-make-model"] .detail').innerText).contains('Abarth 500')
            .takeScreenshot();
    },
    assertLeadPassenger: async function () {
        await t
            .expect(Selector('[data-qa="passenger1-details"] .detail').innerText).contains('TestOne TestRD')
            .takeScreenshot();
    },

    assertChildPassenger: async function () {
        await t
            .expect(Selector('[data-qa="passenger2-details"] .detail').innerText).contains('TestTwo TestRD')
            .takeScreenshot();
    },

}
