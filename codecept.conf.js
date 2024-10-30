exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.oranum.com/',
      show: true,
      browser: 'chromium',
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./src/steps/steps.js']
  },
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      outputDir: "./output/allure-results",
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'codeceptjs'
}