const formReducer = (state, action) => {
    if (action.type === "change_First") {
        return {...state, firstName:action.payload}
    } else if (action.type === "change_last") {
        return {...state, lastName: action.payload}
    } else if (action.type ==="change_email") {
        return {...state, email:action.payload }     
    } else if (action.type ==="change_password") {
        return {...state, password : action.payload}
    } else {
        return state
    }
}

export default formReducer;