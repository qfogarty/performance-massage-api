// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Stop running tests after `n` failures
  bail: 1,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    "json"
  ],

  // A preset that is used as a base for Jest's configuration
  preset: 'jest-runner-prettier',

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    './tests'
  ],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Indicates whether each individual test should be reported during the run
  verbose: true

};
