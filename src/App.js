import React from 'react';
import "./App.css"
//引入路由配置
import ZXRouter from './router/router'
//引入antd-mobile CSS
import 'antd-mobile/dist/antd-mobile.css'


import store from "./store/store"

import { Provider } from 'react-redux'

//处理url参数
function getRequest() {
  var url = decodeURIComponent(window.location.href);
  var theRequest = new Object();
  if (url.indexOf("?") !== -1) {
    var str = url.split('?')[1];
    let strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
class App extends React.Component {
  componentDidMount() {
    //自适应单位rem
    document.getElementsByTagName('html')[0].style.fontSize = document.getElementsByTagName('html')[0].offsetWidth /
      7.50 + 'px';

    if (getRequest().actId) {
      localStorage.setItem('actId', getRequest().actId);
    }
  }
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <ZXRouter></ZXRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
