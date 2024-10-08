module.exports = {
    testDir: './tests',
    timeout: 60000,
    retries: 1,
    use: {
      headless: true,
      viewport: { width: 1280, height: 720 },
      screenshot: 'only-on-failure',
      video: 'retry-with-video',
      trace: 'on-first-retry',
    },
    reporter: [
      ['list'],
      ['html', {  outputFile: 'playwright-report', open:'never' }]
    ]
  };