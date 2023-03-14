import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initGlobalState, MicroAppStateActions, registerMicroApps, start } from 'qiankun';
import { BrowserRouter } from 'react-router-dom';

const state = {
  nickname: '苹果嘿嘿'
}
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});

setTimeout(() => {
  actions.setGlobalState({ ...state, age: 28 })
}, 2000);

actions.setGlobalState(state);
actions.offGlobalStateChange();

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:3011',
    container: '#app1',
    activeRule: '/app1',
    props: {
      nickname: '咖啡',
      age: '25'
    }
  },
  {
    name: 'app2',
    entry: '//localhost:3012',
    container: '#app2',
    activeRule: '/app2',
    props: {
      nickname: '水果',
      age: '20'
    }
  },
  {
    name: 'app3',
    entry: '//localhost:3013',
    container: '#app3',
    activeRule: '/vue3-app3',
    props: {
      nickname: '我是vue3',
      age: '55'
    }
  },

]);
// 启动 qiankun
start();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
