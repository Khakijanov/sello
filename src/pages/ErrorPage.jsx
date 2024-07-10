
// component
import Butoon1 from '../components/Butoon1'
import Button2 from '../components/Button2'
// img
import ErrorImg from '../img/error.svg'
import UnexpectedError from '../img/unexpected.svg'
// react router dom
import { useRouteError } from 'react-router-dom'
function Error() {
    const errorFirst = useRouteError();
    console.log(errorFirst)
    if(errorFirst.status === 404){

        return (
          <div className='flex justify-center items-center min-h-lvh w-full'>
          <div className='w-[500px] flex flex-col gap-3'>
              <h1 className='text-[100px] font-pacifico text-primaryColor'>{errorFirst.status}</h1>
              <p className='text-[30px] text-secobdaryColor'>Ooops!</p>
              <h2 className='text-[60px] font-pacifico text-primaryColor' >Page Not Found</h2>
              <p >Something Went Wrong</p>
              <div>
              <Butoon1 text={'Back to home'} path={'/'}/>
              </div>
          </div>
             <div className='w-[500px]'>
             <img src={ErrorImg} alt="img-error" />
             </div>
      
          </div>
        )
    }else{
        return (
            <div className='flex justify-center items-center min-h-lvh w-full'>
            <div className='w-[400px] flex flex-col gap-3'>
                <p className='text-[30px] text-secobdaryColor'>Ooops!</p>
                <h2 className='text-[60px] font-pacifico text-primaryColor' >Something Went Wrong</h2>
                
                <div>
                <Button2 text={'Back to home'} path={'/'}/>
                </div>
            </div>
               <div className='w-[500px]'>
               <img src={UnexpectedError} alt="img-error" />
               </div>
        
            </div>
          )
    }
}

export default Error