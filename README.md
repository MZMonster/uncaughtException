#UncaughtExceptionError
Catch error and send email to you when UncaughtExceptionError happen.
捕获你未捕获的异常,然后发邮件告诉你具体的堆栈信息.
如果是在 pm2 环境下面运行,可以帮助重启pm2, 未捕获的异常发生的时候,已经开辟的资源不仅不会被释放，而且服务器还在不知疲倦地接受新的用户请求。



## quick getstart

```

var UncaughtExceptionError = require('UncaughtExceptionError')('server name', 'email@qq.com');
a.b;  //b is not defined
```

##params

```

 * @param name your application name
 * @param to email resovle
 * @param isPM2 [options] default false ,
```

If your appliction running with pm2, when UncaughtExceptionError happen, we will help restart proc_id.
So, you need set isPM2 true, as

```
var UncaughtExceptionError = require('UncaughtExceptionError')('server name', 'email@qq.com', true);
```