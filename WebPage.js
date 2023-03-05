require("dotenv").config();
const { Builder, By, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");

function initOptions(o) {
  //   o.addArguments("headless");
  o.addArguments("disable-infobars");
  o.addArguments("no-sandbox");
  // o.addArguments(
  //   "user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 RuxitSynthetic/1.0 v6419931773 t38550 ath9b965f92 altpub"
  // );
  o.setUserPreferences({
    credential_enable_service: false,
  });
}

const BasePage = function (customAudio = null) {
  let o = new chrome.Options();
  initOptions(o);

  this.driver = new Builder()
    .withCapabilities({ acceptSslCerts: true, acceptInsecureCerts: true })
    .setChromeOptions(o)
    .forBrowser("chrome")
    .build();

  this.visit = async function (theUrl) {
    return await this.driver.get(theUrl);
  };

  this.findById = async function (id) {
    await this.driver.wait(
      until.elementLocated(By.id(id)),
      15000,
      "Looking for element"
    );
    return await this.driver.findElement(By.id(id));
  };

  this.findByClassName = async function (name) {
    const els = await this.driver.wait(
      until.elementsLocated(By.className(name)),
      15000,
      "Looking for element"
    );
    return els[els.length - 1];
    return await this.driver.findElement(By.className(name));
  };

  this.signin = async function () {
    const empId = process.env.EMP_ID || "";
    const password = process.env.PASSWORD || "";
    const input = await this.findById("UserLogin_username");
    await input.sendKeys(empId);
    const input2 = await this.findById("UserLogin_password");
    await input2.sendKeys(password);
    const button = await this.findById("login-submit");
    await button.click();
  };

  this.hoverClockInBtn = async function () {
    const elem = await this.findByClassName("show_clock_popover pos-relative inline-block vertical-align-middle");
    const clockInBtn = await this.findByClassName("tool_tip_btn");
    await this.driver
      .actions({ async: true })
      .move({ origin: elem, duration: 2000 })
      .perform();
    await this.driver
      .actions({ async: true })
      .move({ origin: clockInBtn })
      .perform();
  }

  this.pressClockInButton = async function () {
    const elem = await this.findByClassName("show_clock_popover pos-relative inline-block vertical-align-middle");
    const clockInBtn = await this.findByClassName("tool_tip_btn");
    const clockInBtnText = await clockInBtn.getAttribute("innerText");
    await this.hoverClockInBtn();

    if(clockInBtnText !== "Clockout" || clockInBtnText === "Clockin") {
      await this.driver
        .actions({ async: true })
        .move({ origin: elem })
        .press()
        .release()
        .perform();

      this.driver.executeScript("alert('Successfully Marked Attendance!')");
    } else {
      this.driver.executeScript("alert('Attendance Already Marked')");
    }

  };

  this.reload = async function () {
    await this.driver.navigate().refresh();
  }

  this.close = function () {
    // await this.driver.close();
    this.driver.quit();
  }

};

module.exports = BasePage;
