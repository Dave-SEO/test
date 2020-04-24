const defaultStore = {
    valueInput: '123456',
    list: [1,2]
}
export default (state = defaultStore, actions)=> {
    // state 前一次的数据
    console.log('actions', actions)
    if(actions.type === "input_change_value"){
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.valueInput = actions.value
        return newState
    }
    if(actions.type === "list_change"){
         // 深拷贝
         const newState = JSON.parse(JSON.stringify(state))
         newState.valueInput = actions.value
         return newState
    }
    return state
}