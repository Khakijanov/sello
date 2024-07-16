// icon svg
import { Link } from 'react-router-dom';
import AddCart from '../img/shopping-bag-add-icon.svg';

function SingleProduct({ product }) {
   

    const oldPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

    return (
        <div className='w-full'>
            <div className="card min-h-[290px] bg-base-100 w-full shadow-xl overflow-hidden border">
                <figure className='border-b'>
                    <img
                        src={product.thumbnail}
                        className='w-[120px] h-[150px] object-cover'
                        alt="Product Image"
                    />
                </figure>
                <div className="px-4 pt-10 bg-slate-100 h-full">
                    <div>
                        <div className='flex gap-2 min-h-14'>
                            <h2 className="card-title line-clamp-2 items-start" title={product.title}>
                                {product.title}
                            </h2>
                            <div className="badge badge-primary">{`${Math.floor(product.discountPercentage)}%`}</div>
                        </div>
                        <div className='flex  gap-1 mt-4'>
                        <span className='font-bold'>{product.price} $</span>
                        <span className="line-through text-gray-500 text-[13px]">{oldPrice} $</span>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className='p-2 rounded-full my-4 bg-white border border-secondaryColor'>
                            <Link to={`/singleProductDetailes/${product.id}`}><img src={AddCart} alt="Add to Cart" className='w-[20px] hover:cursor-pointer transition-all' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
