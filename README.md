## Automation Task

We would like you to complete a small task to demonstrate your technical understanding of automation. Keep in mind scalability for the project. You are not expected to spend too much time on this, just between 45 mins to 1 hour, although it is not a timed task. We will then need this to be committed to a git repo.  


**Automate the below scenarios, taking screenshots at the end.**
    

1. - Go to the UK home page- www.directferries.co.uk
   - Navigate to the ‘Special Offers’ page
   - Change the language of the site to French

---

2. - Go to the UK home page - www.directferries.co.uk
   - Navigate to the ‘Special Offers’ page 
   - Change the language of the site to Italian

---
3. - Go to the UK My Account page - https://account.directferries.com/?culture=en-GB
   - Log into My Account using the following credentials:
      - qatesting@directferries.com
      - DFP164826683
   - Confirm on the first page (My Booking) that there is:
      - 2 passengers and 1 vehicle for the outbound sailing 
      - 1 passenger and 1 vehicle for the return sailing
   - Navigate to view the details of the outbound sailing
      - Vehicle is showing as Abarth 500
      - Lead passenger name is showing as 'TestOne TestRD'
      - Other passenger name is showing as 'TestTwo TestRD'

---
4. - If you had extra time, what would you have done differently?

Notes:

Ran into an issue with flag language selector.  Elememt was 0x0 pixels and not visible to TestCafe - the implemented tests which change site language  are expected to fail on this basis. I have implemented a workaround function which resizes the element and this works, however would be interested to see if there is a less complicated solution which I may have missed.

- Future Improvments
   - Use paramters/data grid to implement both language changes in one test/function reduce duplication of code.
   - define selectors in one place of reference, so that future changes are easily managed
   - create features based on functionality for readability
   - step definitions to be seperated by Given, When, Then in seperate step files.
   - methods/functions to be seperated by functionality.
   - add reporting to the repo to see test runs in detail

Please send your finished repo via email to racheld@directferries.com prior to your interview
