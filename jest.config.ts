//  jest.config.ts

import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx ? $': 'ts - jest',
  },
  verbose: true,
};

export default config;
