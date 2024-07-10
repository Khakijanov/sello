
import './App.css'
// react Hooks 
import { useContext } from 'react'
// context Api
import { MyContext } from './context/GlobalContext'

// react-router-dom
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
// layout
import MainLayout from './layout/MainLayout'
// pages
import Home from './pages/Home'
import Smartfon from './pages/Smartfon'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Register from './pages/Register'
// component
import ProtectRouter from './components/ProtectRouter'
// action
import { action as registerAction } from './pages/Register'
import {action as loginAction} from './pages/Login'





function App() {
  const user = false
 

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<ProtectRouter user={user}>
      <MainLayout/>
      </ProtectRouter>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/smartfon',
          element:<Smartfon/>
        },
        {
          path:'/smartfon/:id',
          element:<Smartfon/>
        },
        
      ]
    },
    {
      path:'/login',
      element: user ? <Navigate to={'/'}/>:<Login/>,
      errorElement:<ErrorPage/>,
      action:loginAction,
    },
    {
      path:'/register',
      element: user ? <Navigate to={'/'}/>:<Register/>,
      errorElement:<ErrorPage/>,
      action:registerAction,


    }
  ])

  

  return (
   <RouterProvider router={routes}/>
  )
}

export default App
