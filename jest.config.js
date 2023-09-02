/** @type {import('jest').Config} */
const config = {
  verbose: true,
  rootDir: "./tests",
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "node"
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
 setupFilesAfterEnv: ["<rootDir>/setup.js"],
};

module.exports = config;
