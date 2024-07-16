import React from 'react';
// Context
import { useMyContext } from '../hooks/useMyContext';

function TableItem({ prod }) {
    const { incrementCount, decrementCount } = useMyContext();

    return (
        <tr key={prod.id}>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={prod.thumbnail}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{prod.title}</div>
                        <div className="text-sm opacity-50">{prod.category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="text-center w-full"> ${prod.price}</span>
                <br />
                <span className="badge badge-secondary badge-sm ">sale: {prod.discountPercentage} %</span>
            </td>
            <td>
                <div className="flex items-center w-full gap-2">
                    <button onClick={() => incrementCount(prod.id)} className="px-2 py-1 rounded-full leading-none bg-gray-200 font-bold">+</button>
                    <span>{prod.count}</span>
                    <button onClick={() => decrementCount(prod.id)} className="px-2 py-1 pb-1 rounded-full leading-none bg-gray-200 font-bold">-</button>
                </div>
            </td>
            <td>
                <button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default TableItem;
