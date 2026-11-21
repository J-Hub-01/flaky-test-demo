module.exports = {
  testDir: './tests',
  retries: 1,
  reporter: [['list'], ['json', { outputFile: 'reports/latest.json' }]],
};
