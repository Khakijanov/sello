import toast from "react-hot-toast";
// import firebase
import { auth } from "../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// react
import { useState } from "react";
// context
import { useMyContext } from "./useMyContext";

export const useLogin =  ()=>{
    const {dispatch} = useMyContext()
    const [isPending, setIsPending] = useState(false)
   const signIn = async (email, password)=>{
    try{
        setIsPending(true)
        const result = await signInWithEmailAndPassword(auth, email, password)
        const user = result.user
        dispatch({type:'LOG_IN', payload:user})
        toast.success(`Welcome ${user.displayName}`)
        setIsPending(false)
    }
    catch(error){
        const errorMessage = error.message;
        toast.error(errorMessage)
        setIsPending(false)
    }
   }
    return {signIn, isPending}
}