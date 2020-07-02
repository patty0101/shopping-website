import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
//  Provider is a component that we want to wrap around the entire application because we want everything inside 
//  to have access to this store object that we get from redux
// 这时候 <Provider> 里面的子组件 <App /> 才可以使用 connect 方法关联 store。
/* <Provider> 的实现很简单，他利用了 React 一个（暂时）隐藏的特性 Contexts，Context 用来传递一些父容器的属性对所有子孙组件可见，在某些场景下面避免了用 props 传递多层组件的繁琐 */
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  //  Provider is a component that we want to wrap around the entire application because we want everything inside 
//  to have access to this store object that we get from redux
//  Provider is a componet and it's got to be the parent of everything
<Provider store={store}>
<Router>
      <App />
    </Router>
</Provider>,
   

  document.getElementById('root')
);


