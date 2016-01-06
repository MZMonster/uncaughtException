/**
 * Created by liuxing on 16/1/6.
 */
var nodemailer = require('nodemailer');

function sendEmail(title, text, to, callback){
  var transporter = nodemailer.createTransport();
  transporter.sendMail({
    from: 'admin@server.com',
    to: to,
    subject: title + ' 出现未捕获异常!',
    text: text
  }, function () {
    console.log('email send to %s success!', to);
    callback();
  });
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
    sendEmail(application, err.stack, to, function () {
      if (needExit) {
        // sendEmail need take some while.
        console.log('proccess exit');
        process.exit(0);
      }
    });

  });
};
