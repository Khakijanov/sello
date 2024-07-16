// firebase
import { signInWithPopup, updateProfile } from "firebase/auth"
import { auth } from "../firebase/Firebase"
import { GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useMyContext } from "./useMyContext"
import toast from "react-hot-toast"

function useRegistration() {
    const [ispending, setIsPending] = useState(false)
    const {user, dispatch} = useMyContext()

    // registration with google
    const registerWithGoogle = async ()=>{
        try{
            setIsPending(true)
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            dispatch({type:'LOG_IN', payload:user})
            toast.success(`Welcome ${user.displayName}!`)
            setIsPending(false)
        }
        catch(error){
            const errorMessage = error.message;
            console.log(errorMessage)
            setIsPending(flase)
        }
   
    }
    // registration with Email And Password
    const registerWithEmailAndPassword = async (displayName,  email, password)=>{
        try{
            const register = createUserWithEmailAndPassword(auth, email, password)
            const user = (await register).user
            await updateProfile(auth.currentUser, {displayName})

            dispatch({type:'LOG_IN', payload:user})
            toast.success(`Welcome ${user.displayName}`)
        }
        catch(error){
            const errorMessage = error.message;
            toast.error(errorMessage)
        }
    }

    return {registerWithGoogle, ispending, registerWithEmailAndPassword}

}

export {useRegistration} 