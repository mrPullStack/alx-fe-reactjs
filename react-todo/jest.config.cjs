module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/__tests__/**/*.test.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
};
