import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  clearMocks: true,
  globals: {},
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@test-utils(.*)$': '<rootDir>/test-utils/$1',
  },
};

export default config;
