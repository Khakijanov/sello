// react-router-dom
import { useLoaderData } from 'react-router-dom';
// component
import SingleProduct from './SingleProduct';

function ProductList() {
    const {data} = useLoaderData()
    
  return (
    <div className="grid grid-cols-4 gap-4">
        {data.products.map((product)=>{
         return <SingleProduct key={product.id} product={product}/>
        })}
    </div>
  )
}

export default ProductList