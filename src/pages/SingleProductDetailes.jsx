// react
import React, { useState } from 'react';
// react-router dom 
import { useLoaderData } from "react-router-dom";
// utilts
import { customFetch } from "../utils";
// componets
import Counter from "../components/Counter";
// context
import {useMyContext} from '../hooks/useMyContext'

export const loader = async ({ params }) => {
  const response = await customFetch(`${params.id}`);
  const product = response.data;
  return { product };
}

function SingleProductDetailes() {
  const {addCart} = useMyContext()
  const { product } = useLoaderData();
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    const newProduct = {
      ...product,
       count,
    };
    addCart(newProduct);
  }

  return (
    <div className="Mycontainer mt-10 w-1/2 card card-side bg-base-100 shadow-2xl">
      <figure>
        <img src={product.thumbnail} alt="Product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <Counter onChange={setCount}  />
  
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn bg-secondaryColor text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default SingleProductDetailes;
