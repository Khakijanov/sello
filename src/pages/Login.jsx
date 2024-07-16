// react-router-dom
import { Form, Link, useActionData } from 'react-router-dom'
// componet
import Button2 from '../components/Button2'
import Btn from '../components/Btn'
import FormInput from '../components/FormInput'
// react
import { useEffect, useContext } from 'react'
// context
import { MyContext } from '../context/GlobalContext'
// custom hook
import { useRegistration } from '../hooks/useRegistration'
import {useLogin} from '../hooks/useLogin'


 export const action = async ({request})=>{
 let formData = await request.formData();
 let email = formData.get('email')
 let password = formData.get('password')
 return {email, password}
}


function Login() {
  
  
  const {registerWithGoogle, ispending} = useRegistration()
  const {signIn} = useLogin()


  const userData = useActionData();
  useEffect(()=>{
   if(userData){
    signIn(userData.email, userData.password)
   }
  }, [userData])
  return (
    <div className={`grid grid-cols-1 min-h-screen w-full place-items-center Background`}>
    <Form method='post' className='forms backdrop-blur-sm'>
      <h1 className='text-secondaryColor text-2xl  font-pacifico'>Welcome come Back</h1>
      <div className='w-full flex flex-col gap-6 relative mb-4'>
      <FormInput label={'Email'} placeholder={'Email'} type={'email'} name={'email'}/>
      <FormInput label={'pasword'} placeholder={'Pasword'} type={'password'} name={'password'}/>
      <span className='absolute -bottom-7 right-0 text-[14px] select-none cursor-pointer hover:text-secondaryColor text-textColor'>forget your password ?</span>
      </div>
        <Btn type={'submit'} text={'Sign In'} style={'w-full text-center'} />
        <div class="flex items-center justify-center">
          <div class="border-t border-black flex-grow mr-3  w-6"></div>
            <span class="text-gray-500">Or Sign in with</span>
          <div class="border-t border-black flex-grow ml-3 w-6"></div>
        </div>
        <div className='w-full flex justify-between items-center gap-1'>
         <Btn onClick={registerWithGoogle} type={'button'} text={` Google` } style={'rounded-md'}/>
          <Btn type={'button'} text={'Facebook'} style={'rounded-md'}/>
          <Btn type={'button'} text={'GitHub'} style={'rounded-md'}/>
        </div>
        <span className='text-textColor '>Don't have an accaunt <Link className='font-bold text-black' to={'/register'}>Sign Up</Link></span>

    </Form>
    </div>
  )
}

export default Login