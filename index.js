const BasePage = require("./WebPage")

async function sleep(timeInS) {
  await new Promise((resolve) => setTimeout(resolve, timeInS * 1000))
}

async function startBot() {
  const page = new BasePage();
  const loginUrl = "https://pwhr.darwinbox.in/user/login";
  const attendanceUrl = "https://pwhr.darwinbox.in/attendance";

  await page.visit(loginUrl);
  await sleep(2)

  await page.signin();
  await sleep(1)

  await page.visit(attendanceUrl);
  await sleep(1)

  try {
    await page.pressClockInButton();
    await sleep(2);

    // await page.reload();
    // await sleep(1);

    // await page.hoverClockInBtn();
    // await sleep(2);

    await page.close();
  } catch(e) {
    console.error(e)
  }

  await new Promise((resolve) => setTimeout(resolve, 5000))
}


(async () => {
  await startBot()
})()
