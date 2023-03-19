# darwinbox-attendance-bot
install packages

### Ensure we enable execution permissions for the file
chmod u+x ./run.sh
chmod u+x ./stop.sh
chmod u+x ./index.js

### Ensure we enable read and write permissions for the file
chmod u+r+w ./output.log

### OR Give read, write and execute permission in current project
chmod u+r+w+x ./
or 
chmod 777 ./

## Create Automation
crontab -e
*/1 * * * * cd ~/codebase/darwinbox-attendance-bot && ./run.sh
press escape then press shift + colon and type wq and then press ok

Above cron job will run at 11:30 on every day from Monday to Friday. Ref: https://crontab.guru/#30_11_*_*_1-5


To see a list of your active crontab jobs, use the following command:
crontab -l

If you want to remove all the cron job
crontab -r

You can add multiple cron jobs in the crontab.



Execute every 5 minutes	
*/5 * * * *