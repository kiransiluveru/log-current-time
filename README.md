
Using this package you can log current date and time just by calling the function.
This is very useful when you want to track time taken by script to execute and complete the functionality.

**Example Usage:**

```
const logTime = require('log-current-time');

logTime({ infoString: 'I am logging in here ' });
logTime();
logTime({});
logTime({ infoString: ' Only date showing example ', showTime: false });
logTime({ infoString: ' Only time showing example ', showDate: false });
logTime({ infoString: 'I am logging at here' });
logTime({ disableLog: true });  //log disabled won't log to console
const timeString = logTime({ infoString: 'returning log to variable example' });
console.log('timeString ', timeString);

```

**Output:**


> I am logging in here :  5/4/2020 - 13:37:28

>5/4/2020 - 13:37:28

>5/4/2020 - 13:37:28

> Only date showing example :  5/4/2020

> Only time showing example :   - 13:37:28

>I am logging at here:  5/4/2020 - 13:37:28

>returning log to variable example:  5/4/2020 - 13:37:28

>timeString  returning log to variable example:  5/4/2020 - 13:37:28
