/** @type {import('jest').Config} */
const config = {
  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  // },
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
