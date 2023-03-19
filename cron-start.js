const cron = require('node-cron');
const { startBot } = require("./index");

// Schedule tasks to be run on the server.
cron.schedule('30 11,17 * * 1-5', function() {
  // Running a task at 11:30am and 5:30pm on weekday (Monday to Friday) Ref: https://crontab.guru/#30_11,17_*_*_1-5
  startBot();
}, {
  timezone: "Asia/Kolkata"
});
