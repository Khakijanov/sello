

// custom fetch
import { customFetch } from '../utils';

// loader
export const loader = async ()=>{
  const response = await customFetch();
  const data = response.data
  return {data};
}
// components
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';


function Home() {
  
  
  return (
   < >
   <Hero/>
    <div className='Mycontainer'><ProductList/></div>
   </>
  )
}

export default Home