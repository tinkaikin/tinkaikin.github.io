export default (state, action方法) => {
    // console.log(state)
    //开始是没有值的 是undefined  通过 connect 里的传出来的值来重新获得
    if(state == undefined){
        state = {'v': 10,'a': 1,'c': 2 }
    }
    // console.log(action方法)
    if(action方法.type === "ZENGJIA") {
        // return {'v': state.v + 1,'a': 1,'c': 2 }
        state = {'v': state.v + 1,'a': 1,'c': 2 }
    }
    if(action方法.type === "JIANSHAO") {
        // return {'v': state.v + 1,'a': 1,'c': 2 }
        state = {'v': state.v - 1,'a': 1,'c': 2 }
    }

    return state;
}