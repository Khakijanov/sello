import React from 'react'
// img
import Logo from '../img/logo.svg'
import Cart from '../img/cart.svg'
// react-router-dom
import { Link } from 'react-router-dom'
import Butoon1 from './Butoon1'
import Button2 from './Button2'
import  Input  from './Input'
import Hero from './Hero'


function Navbar() {
  return (
    <div>
      <div className='Mycontainer relative'>
        <nav className=' myFlex'>
          <div className={'w-20 py-2'}>
            <img src={Logo} alt="logo" className='' />
          </div>
          <div className='flex items-center mt-8'>
          <ul className='flex items-center gap-10 mr-16 mt-2 '>
            <li>
              <Link to={'/smartfon'} className='linkStyle'>Smartfon</Link>
            </li>
            <li>
              <Link className='linkStyle'>Shoes</Link>
            </li>
            <li>
              <Link className='linkStyle'>Make Up</Link>
            </li>
          </ul>

            <div className='flex items-center mr-24 gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-primaryColor mt-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-primaryColor mt-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
             <div>
             <Link><img src={Cart} className='w-[35px]' alt="" /></Link>
             </div>
            </div>
          <div className='mt-2 flex gap-4' >
              <Button2 text={'Sign Up'}/>
              <Butoon1 text={'Sign In'}/>
          </div>
          </div>
        </nav>
        <div className='  w-1/2  mx-auto '>
          <Input />
        </div>
        <Hero/>
    </div>
    </div>
  )
}

export default Navbar

