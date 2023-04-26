import '@testing-library/jest-dom'

module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['client/app/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};