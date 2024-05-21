import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // Use ts-jest preset to handle TypeScript files
  preset: 'ts-jest',

  // Specify the paths that Jest should ignore during test runs
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],

  // The test environment that will be used for testing
  //testEnvironment: 'node',

  // testMatch: [
  //   "**/__tests__/**/*.test.ts",
  //   "**/__tests__/**/__unit__/**/*.test.ts", 
  //   "**/__tests__/**/__int__/**/*.test.ts"   
  // ],

  // A map from regular expressions to paths to transformers
  //transform: {
    //'^.+\\.tsx?$': 'ts-jest',
  //},

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  //transformIgnorePatterns: [
    //"\\\\node_modules\\\\",
  //],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   'ts',
  //   'tsx',
  //   'js',
  //   'jsx',
  //   'json',
  //   'node',
  // ],
};

export default config;
