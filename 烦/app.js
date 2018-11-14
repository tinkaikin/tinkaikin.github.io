
//应用程序的启动(入口)文件


//加载express模块
var express = require('express');
//加载模板处理模块
var swig = require('swig');
//创建app应用  => NodeJS Http.createServer();
var app = express();



//配置模板 三步骤
//定义当前应用所使用的模板引擎
//第一个参数:模板引擎的名称,同时也是模板文件的后缀,解析模板内容的方法
app.engine('html', swig.renderFile);
//设置模板文件存放的目录,第一个参数不能改,第二个是参数是相对目录
app.set('views','./views');  
//注册所使用的摸板引擎,第一个参数必须是view engine,第二个参数跟app.engine的名称要一致
app.set('view engine','html');  
//设置静态文件托管 
app.use('/public', express.static(__dirname + '/public'));
//取消默认缓存
swig.setDefaults({cache:false});


//根据不同的功能划分模块
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));   





// app.get('/',function(req, res, next){
// //     res.send("<h1>欢迎来到我的页面</h1>")
//     /*
//     * 读取views目录下 指定文件,解析后并返回给客户端
//       第一个参数:表示模板的文件,相对于views目录 .html后缀可以省略  (获取文件数据)
//       第二个参数:传递给模板使用的数据                             (传递过去的数据)      
//     * */
//     res.render('index')
//     // console.log(res)

// });



//使用静态托管 这个不用了
// app.get('/main.css', function(req, res, next){
//     res.setHeader('content-type', 'text/css');
//     res.send('bady{background: red;}') //默认是发送html
//     // res.render('main.css')
// })







//监听请求
app.listen(8081);