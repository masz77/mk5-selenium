const webdriver = require('selenium-webdriver')
const driver = new webdriver.Builder()
  // The "9515" is the port opened by ChromeDriver.
  .usingServer('http://localhost:9515')
  .withCapabilities({
    'goog:chromeOptions': {
      // Here is the path to your Electron binary.
      binary: '/opt/ometadefender-mk5/ui/ui'
	args: [
                    "--disable-dev-shm-usage"
                ]
    }
  })
  .forBrowser('chrome') // note: use .forBrowser('electron') for selenium-webdriver <= 3.6.0
  .build()
driver.get('http://www.google.com')

