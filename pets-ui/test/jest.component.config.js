module.exports = {
  verbose: true,
  testMatch: [  "**/testing-library/?(*.)+(spec|test).[jt]s?(x)" ],
  testTimeout: 20000,
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/jest/mocks/styleMock.js',
  }
};