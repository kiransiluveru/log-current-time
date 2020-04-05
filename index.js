
function logTime({ infoString = ' ', showDate = true, showTime = true, disableLog = false } = {}) {
    const today = new Date();
    const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let result = '';
    try {
        if (showDate) {
            result = result + date;
        }
        if (showTime) {
            result = result + ' - ' + time;
        }
        if (infoString) {
            if (infoString !== ' ') {
                result = infoString + ':  ' + result;
            }
        } if (!disableLog) {
            console.log(result);
        }
    } catch (error) {

    }
    return result;
}

module.exports = logTime;
