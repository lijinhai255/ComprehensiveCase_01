//基于express 搭建的服务器

let express = require("express")

// 5 引入ejs 

let ejs = require('ejs')
// 6 启动服务器

let http = require("http")
let https = require('https');
// 引入fs
let fs = require('fs');

// 9 引入path
// 引入path
let path = require('path');
//2 创建应用程序
let app = express()

// 4 配置ejs
app.engine('.html',ejs.__express)
app.set('view engine','ejs')
// 引入秘钥文件, __dirname, process.cwd()
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

// 3 定义请求

app.get("/",(req,res)=>{
    //渲染模板引擎
    res.render('home.html')//配置ejs 模板引擎
})

// 8 静态化资源
// 静态化资源
app.use('/static/', express.static(path.join(process.cwd(), '/static/')))
app.use('/service-worker.js', express.static(path.join(process.cwd(), '/static/home/service-worker.js')))
app.use('/manifest.json', express.static(path.join(process.cwd(), '/static/home/manifest.json')))
//7 启动http服务

http.createServer(app)
    .listen(3010,res=>console.log("http port listen at 3010"))
// https服务
https.createServer({ key, cert }, app)
    .listen(3011, res => console.log('http port listen at 3011'))


