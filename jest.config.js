module.exports = {
  //   ...require('jest-common/jest.react'),
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  //   testPathIgnorePatterns: ['<rootDir>/src/index.ts', '<rootDir>/src/types.ts'],
  //   collectCoverageFrom: ['<rootDir>/src/.{ts,tsx}'],
  //   moduleNameMapper: {
  //     moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  //     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //       '<rootDir>/__mocks__/fileMock.js',
  //     '\\.(css|scss)$': 'identity-obj-proxy',
  //   },
};
