module.exports = {
  projects: [{ preset: 'jest-expo' }],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/jest.config.js',
    '!**/.eslintrc.js',
  ],
};
