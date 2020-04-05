const logTime = require('./index');

logTime({ infoString: 'I am logging in here ' });
logTime();
logTime({});
logTime({ infoString: ' Only date showing example ', showTime: false });
logTime({ infoString: ' Only time showing example ', showDate: false });
logTime({ infoString: 'I am logging at here' });
logTime({ disableLog: true });  //log disabled won't log to console
const timeString = logTime({ infoString: 'returning log to variable example' });
console.log('timeString ', timeString);
