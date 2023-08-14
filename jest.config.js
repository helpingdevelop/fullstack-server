module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalSetup: "<rootDir>/node_modules/@databases/pg-test/jest/globalSetup",
  globalTeardown:
    "<rootDir>/node_modules/@databases/pg-test/jest/globalTeardown",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: ["**/+(*.)+(spec|test).+(ts)?(x)"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
