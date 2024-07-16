import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/Firebase";
import toast from "react-hot-toast";


function TodoDetailes({ data,modalContent  }) {
  const hendlDelete = (id)=>{
    deleteDoc(doc(db,"todos", id)).then(()=>{
      toast.success('Deleted')
    }).catch((error)=>{
      toast.error(error.message)
    })
  }
  // complated
  const handleComplated = (id, status)=>{
      const todosRef = doc(db, "todos", id);
      updateDoc(todosRef,{
        completed: !status,
      }).then(()=>{
        toast.success('Update !')
      }).catch((error)=>{
        toast.error(error.message)
      })
  }
    
    return (
      <div>
        <ul className="Mycontainer relative pb-14  mt-2 bg-secondaryColor bg-opacity-25 rounded-b-md ">
        {data && data.map((item, index) => (
          <li onDoubleClick={()=>handleComplated(item.id, item.completed)} 
            className={`myFlex py-2 border-b border-white ${
              index === data.length - 1 ? 'border-none' : ''
            } ${item.completed ?'opacity-40 line-through':'opacity-100'} select-none `}
          >
            <input type="checkbox"  className="checkbox checkbox-sm" checked={item.completed}  />
            <h1>{item.title}</h1>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                 </svg>
                <svg onClick={()=> hendlDelete(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:text-red-800 transition-all cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>



            </div>
          </li>
        ))}
      
     
        <h1 onClick={modalContent} className="text-white  absolute  -bottom-5  py-2 left-1/2 transform -translate-x-1/2 bg-secondaryColor w-[40%]   rounded-full flex items-center justify-center gap-2 cursor-pointer">    <span >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>

            </span> new task</h1>
        
      </ul>
    
      </div>
    );
  }
  
  export default TodoDetailes;
  