# api_test

Project Description:

This a sample api test automation project developed to demonstrate technical skills in writing API test automation, mainly focussed on setting up the frameworks and running end-to-end sample tests integrating with CI/CD(Github actions).

To demonstrate API_tests contains two test frameworks:

1. Postman collection framework.

2. Node.js Framework using: Mocha, chai, chai-http, chai-json-schema, mochawesome-report-generator
   

Instructions to run locally using mocha:

1. Clone the repo
2. change the directory to API_tests
3. run command: npm test

To describe the assets used in the frameworks:

1. Test.js: this file has all the test cases for api_testing.

2.apiData.js: this file will be used as a data repository to store different types of data as per our business requirements and all data calls will be happening from this file to test.js

3.jsonSchema.js: this file will be used as a data repository to store different data schemas used in our system.


Both frameworks run validations for Pet_Store API running through docker-compose. These validations are getting triggered using GitHub actions workflow.
