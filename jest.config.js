
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['client/app/**/*.{js,jsx}', '/server/tests/**/*.{js}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
}
