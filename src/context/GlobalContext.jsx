
import { createContext, useReducer} from "react";

// contextni yaratish
const MyContext = createContext();


const changeState = (state, action )=>{
    const {type, payload} = action

    switch(type){
        case 'LOG_IN':
            return {...state,  user:payload}
        case'LOG_OUT': 
            return {...state, user:null}
        case 'IS_AUTH_READY':
            return {...state, isAuthReady:true}
        default:
            return state         
    }
}
const data = {
    user:null,
    isAuthReady:false, 
    products:[],
    totalProduct:0,
    totalPrice:0,
}
const MyContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(changeState, data)
    

    return (<MyContext.Provider value={{...state, dispatch}} >{children}</MyContext.Provider>)
    
}

export {MyContext, MyContextProvider}

