
import './App.css'
// react Hooks 

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
import SingleProductDetailes from './pages/SingleProductDetailes'
import Todo from './pages/Todo'
import Cart from './pages/Cart'
// component
import ProtectRouter from './components/ProtectRouter'
// action
import { action as registerAction } from './pages/Register'
import {action as loginAction} from './pages/Login'
import { action as actionTodo } from './pages/Todo'
//context
import { useMyContext } from './hooks/useMyContext'
import { useEffect } from 'react'
// firebase
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/Firebase'
// loader
import { loader } from './pages/Home'
import { loader as singleProductLoader } from './pages/SingleProductDetailes'





function App() {
  const {user, dispatch, isAuthReady} = useMyContext()
 
 
 

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
          element:<Home/>,
          loader:loader
        },
        {
          path:'/smartfon',
          element:<Smartfon/>
        },
        {
          path:'/smartfon/:id',
          element:<Smartfon/>
        },
        {
          path:'/singleProductDetailes/:id',
          element:<SingleProductDetailes/>,
          loader:singleProductLoader
        },
        {
          path:'/todo',
          element:<Todo/>,
          action: actionTodo,
          
        },
        {
          path:'/cart',
          element:<Cart/>,

        }
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
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
     dispatch({type:'LOG_IN',payload:user})
     dispatch({type:"IS_AUTH_READY"})
    })
  },[])

  

  return (
   <>{isAuthReady && <RouterProvider router={routes}/>}</>
  )
}

export default App
