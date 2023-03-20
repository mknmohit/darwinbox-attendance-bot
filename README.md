
# :robot: Darwinbox Attendance Bot

It will mark your attendance in darwinbox portal if you missed it.

This bot is built using Node.js and Selenium webdriver. In Generally Selenium is used for automation testing. But here we are using it for automating the browser and mark the attendance.

## :shopping: Prerequisite

- NPM
- Node: `v19.7.0` preferably or later versions
- Chrome browser: `v111` or later versions
## :closed_lock_with_key: Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. Create `.env` file in root directory of the project if not present. Look at an example of environment variables in `.env.example` file.

`EMP_ID`

`PASSWORD`


## :desktop_computer: Run Locally

Clone the project

```bash
  git clone https://github.com/mknmohit/darwinbox-attendance-bot.git
```

Go to the project directory

```bash
  cd darwinbox-attendance-bot
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

It will start the server and mark your attendance only once. To keep running the server in the background and mark your attendance daily then run.

```bash
  node cron-start.js
```

:warning: Bot will not run if your laptop/system is sleeping or shutdown. It will only run when you are using your system.


## :raising_hand:	 FAQ

### :point_right: How to run the bot in background with GUI? 

By default it will run headless browser i.e without showing the browser GUI to the user. If you want to visually see how the bot is running and marking your attendance then you can comment out this line `o.addArguments("headless")` in file [WebPage.js](https://github.com/mknmohit/darwinbox-attendance-bot/blob/main/WebPage.js#L7)
![code](https://user-images.githubusercontent.com/19211475/226307168-fbc40a69-ae62-4f6e-a191-b12202e5631b.png)


### :point_right: How to start the cron job to mark the attendance daily?

run the server using the command `node cron-start.js` and don't close the server if you want to mark you attendance daily.


### :point_right: When the corn job will run?

The bot is used to mark your attendace if you miss it. Therefore, it will run around **11:30pm** IST and **5:30pm** IST from Monday to Friday to check if you have marked your attendance or not and it will mark the attendance if you missed it.


### :point_right: How to change the time for cron job?
In `cron-start.js` file, you need to update the first argument of [cron.schedule()](https://github.com/mknmohit/darwinbox-attendance-bot/blob/main/cron-start.js#L5) method i.e `"30 11,17 * * 1-5"`. For syntax you can take quick references from below links:
- [crontab.guru](https://crontab.guru/#30_11,17_*_*_1-5)
- [github.com/node-cron/node-cron](https://github.com/node-cron/node-cron)

