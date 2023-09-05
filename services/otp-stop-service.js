const globalData = require('../global/global_data');

function clearOtp(email) {
    setTimeout(() => {
        globalData.otpArr.filter(obj => obj.email != email)
    },process.env.OTP_TIMEOUT * 1000);
}



module.exports.clearOtp = clearOtp;