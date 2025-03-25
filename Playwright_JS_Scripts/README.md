**Project Description:**

This a sample UI functional test automation project developed to demonstrate technical skills in writing UI test automation, mainly focussed on setting up the frameworks and running end-to-end sample tests integrating with CI/CD(Github actions).

To demonstrate, UI tests using the **Playwright** framework:

To implement the UI tests I have taken an example of www.amazon.in, performing buyers actions using Page Object Model pattern.

**User Actions performed:**

1. Go to www.amazon.in
2. select categories of formal shoes
3. add the filters to the product
4. add at least 3 products to the cart
5. check if the sub-total value of the cart is not more than 1500
6. if yes, then delete the item from the cart

**To explain the folder structure:**

**Page folder:** This folder will contain all the {page}.js file which would have all the elements present on that page.

**Test Data Folder:** This folder will have js files containing the test data that we would like to pass for our test scenarios. for example, I have added the user filter for shoes like the company, and size the user wants to select and then these filters would be passed on to the Product filter js files.

**Product Filter:** This folder will have js files that will get filter data from test Data and later it will apply filters so that it can be used directly in our test

**Util folder:** This folder will have js files which would need to perform common actions on webpages.

**tests:** This folder will have all test js files. 


These validations are getting triggered using the GitHub actions workflow.




