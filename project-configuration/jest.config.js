module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};
