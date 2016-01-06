/**
 * Created by liuxing on 16/1/6.
 */
var nodemailer = require('nodemailer');
var pm2 = require('pm2');

function sendEmail(title, text, to){
  var transporter = nodemailer.createTransport();
  transporter.sendMail({
    from: 'admin@server.com',
    to: to,
    subject: title + ' 出现未捕获异常!',
    text: text
  });
  console.log('email send to %s success!', to);
}

/**
 *
 * @param application your application name
 * @param to email resovle
 * @param needExit [options] default false, set true will process.exit(0);
 */
module.exports = function (application, to, needExit) {
  process.on('uncaughtException', function(err) {
    err.name = 'UncaughtExceptionError';
    console.error('Caught exception:', err.stack);
    sendEmail(application, err.stack, to);
    // sendEmail need take some while.
    if (needExit) {
      setTimeout(function () {
        console.log('proccess exit');
        process.exit(0);
      }, 3000)
    }
  });
};
