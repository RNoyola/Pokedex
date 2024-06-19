
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transform: {
    '^.+\\.(js|ts|tsx|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ["node_modules/(?!react-native|react-navigation)/"],
};
