/** @type {import('jest').Config} */
const config = {
  verbose: true,
  rootDir: "./tests",
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

module.exports = config;
