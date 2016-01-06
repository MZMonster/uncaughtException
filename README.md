#UncaughtExceptionError
Catch error and send email to you when UncaughtExceptionError happen.
捕获你未捕获的异常,然后发邮件告诉你具体的堆栈信息.
如果是在web 应用 未捕获的异常发生的时候,已经开辟的资源不仅不会被释放，而且服务器还在不知疲倦地接受新的用户请求。



## quick getstart

```

var UncaughtExceptionError = require('catch-uncaught-exception')('server name', 'email@qq.com');
a.b;  //b is not defined
```

##params

```

 * @param name your application name
 * @param to email resovle
 * @param needExit [options] default false , set true process will exit.
```
