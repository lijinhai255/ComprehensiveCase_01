"# ComprehensiveCase_01" 

## 服务器部署 
 基于node开发的一个服务器，实现对数据的存储

 ## 目录部署

文件夹名称| 移动端目录
------------ | ------------- 
home | 移动端目录
admin | 后台目录
server | 服务器端
static | 静态资源
ssl | https密钥
cache | 缓存目录
views | 模板目录
app.js | 启动文件

## 移动端开发

基于React 实现的移动端网课


### 技术架构

使用React JSX ES Module Router, Redux, less, webpack, create-react-app, html等技术

### 目录部署

├── home 移动端目录
│   ├── public//静态资源
│   │   ├── index.html //模板文件
 ├── src 开发目录
│   ├── components //所有组件
│   ├── views //所有页面
│   ├── App.jsx //应用程序组件
│   ├── App.less //应用程序样式
│   ├── index.jsx //入口文件
│   ├── index.less //全局样式

### 发布资源
* 静态资源
css，js等静态资源，发布到static/home目录下 
* 模板资源
index.html，发布到views目录下，并改名成home.html.



### react-app 修改配置 更改发布资源目录       


### 配置路由

````javaScript
import React, { Component } from 'react';
// 引入路由
import {Switch,Route} from 'react-router-dom'
// 引入页面组件
import Home from "./views/Home/Home"
import Detail from "./views/Detail/Detail"
import Buy from "./views/Buy/Buy"

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/detail/:id" component={Detail}></Route>
          {/*搜索页面*/}
          <Route path="/search/:word" component={Home}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
````
> index.js
````javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter,Route} from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HashRouter><App></App></HashRouter>, document.getElementById('root'));
registerServiceWorker();
````

### 引入redux

