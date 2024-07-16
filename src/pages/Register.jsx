
import FormInput from '../components/FormInput'
import { Form, Link, useActionData } from 'react-router-dom'
import Btn from '../components/Btn'
import { useEffect } from 'react';

export const action = async ({request})=>{
  let formData = await request.formData();
  let dispalyName = formData.get('displayName')
  let lastName = formData.get('lastname')
  let email = formData.get('email')
  let password = formData.get('password')
  return {dispalyName, lastName, email, password}

}
// custom hook
import { useRegistration } from '../hooks/useRegistration';

function Register() {
  const {registerWithGoogle, ispending, registerWithEmailAndPassword} = useRegistration()
  const userData = useActionData();
  useEffect(()=>{
    {userData && registerWithEmailAndPassword(userData.dispalyName, userData.email, userData.password)}
  },[userData])
  return (
    <div className={`grid grid-cols-1 min-h-screen w-full place-items-center Background`}>
    <Form method="post" className=' formsRegister backdrop-blur-sm'>
      <h1 className='text-secondaryColor text-2xl  font-pacifico'>Create your Accaunt</h1>
      <div className='w-full flex flex-col gap-6 relative mb-4'>
      <div className='flex gap-1 '>
      <FormInput label={'Name'} placeholder={'Name'} type={'text'} name={'displayName'}/>
      <FormInput label={'LastName'} placeholder={'LastName'} type={'text'} name={'lastname'}/>
      </div>
      <div className='flex gap-1  '>
      <FormInput label={'Email'} placeholder={'Email'} type={'email'} name={'email'}/>
      <FormInput label={'pasword'} placeholder={'Pasword'} type={'password'} name={'password'}/>
      </div>
      
      </div>
        <Btn type={'submit'} text={'Sign Up'} style={'w-full text-center'} />
        <div class="flex items-center justify-center">
          <div class="border-t border-black flex-grow mr-3  w-6"></div>
            <span class="text-gray-500">Or Sign in with</span>
          <div class="border-t border-black flex-grow ml-3 w-6"></div>
        </div>
        <div className='w-full flex justify-between items-center gap-1'>
         <Btn  onClick={registerWithGoogle} type={'button'} text={` Google` } style={'rounded-md'}/>
          <Btn type={'button'} text={'Facebook'} style={'rounded-md'}/>
          <Btn type={'button'} text={'GitHub'} style={'rounded-md'}/>
        </div>
        <span className='text-textColor '>if you have an accaunt <Link className='font-bold text-black' to={'/login'}>Sign In</Link></span>

    </Form>
    </div>
  )
}

export default Register