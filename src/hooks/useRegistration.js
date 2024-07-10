// firebase
import { signInWithPopup } from "firebase/auth"
import { auth } from "../firebase/Firebase"
import { GoogleAuthProvider } from "firebase/auth"
import { useState } from "react"

function useRegistration() {
    const [ispending, setIsPending] = useState(false)

    const registerWithGoogle = async ()=>{
        try{
            setIsPending(true)
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            console.log(user)
            setIsPending(false)
        }
        catch(error){
            const errorMessage = error.message;
            console.log(errorMessage)
            setIsPending(flase)
        }
   
    }
    return {registerWithGoogle, ispending}

}

export {useRegistration} 