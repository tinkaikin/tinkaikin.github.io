import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as 接收命令文件集合 from './接收命令文件集合.js'

let App = (state加action) => {
  // console.log(state加action.action)
  return (
    <div>
      <h1>{state加action.v}</h1>
      <button onClick={state加action.action.增加}>加一</button>
      {' '}
      <button onClick={state加action.action.减少}>减一</button>
    </div>
  )
}

export default connect( //通过connect的第一个函数可以获得外面传进来到state对象! 可以直接return state出去
  (state数据进来)=>{
    // console.log(state数据进来)
    return (state数据进来)}
  ,
  // (dispatch派遣命令出去)=>{

  //   return (
  //   {
  //     action:{
  //       增加: function() {
  //         dispatch派遣命令出去({'type':"ZENGJIA"})
  //       },
  //       减少: function() {
  //         dispatch派遣命令出去({'type':"JIANSHAO"})
  //       }
  //     }
  // })}
  // mapDispatchToProps

  //可以通过bindActionCreators方法访问 "接收命令文件集合"里面的函数

  //dispatch派遣命令出去   : 这个参数是 connect方法里面的
  (dispatch派遣命令出去)=>{
    console.log(dispatch派遣命令出去)
  return ({action : bindActionCreators(接收命令文件集合,dispatch派遣命令出去)})
  }
)(App);




// function chehe() {
//     class App extends Component {
//       constructor(props) {
//         super();
//         console.log(props)
//       }
//       render() {
//         return (
//             <div className="App">
//               我是App,我是个组件
//             </div>
//         );
//       }
//     }
    
//     // export default App;
//     // connect(
//     //   // ()=>()
//     //   // ,
//     //   // ()=>()
//     //   )(App);
//   }








