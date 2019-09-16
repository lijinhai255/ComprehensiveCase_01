import React, { Component } from 'react';
// 引入路由
import {Switch,Route} from 'react-router-dom'
// 引入页面组件
import Home from "./views/Home/Home"
import Detail from "./views/Detail/Detail"
import Buy from "./views/Buy/Buy"
import { addLesson } from './action';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(addLesson("hellow"))
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Switch>
          <Route path="/detail/:id" component={Detail}></Route>
          {/*搜索页面*/}
          <Route path="/buy/:id" component={Buy}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;

