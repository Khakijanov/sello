// firebase
import { db } from "../firebase/Firebase"
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
// react
import { useEffect, useState } from "react"

export function useCollection(collctionName, whereName, orderName) {
 const [data, setData] = useState(null);
 
 
 useEffect(()=>{
     const q = query(collection(db, collctionName), where(...whereName), orderBy(...orderName));
    onSnapshot(q, (querySnapshot) => {
        const todos = []
        querySnapshot.docs.forEach((item)=>{
           
            todos.push({id:item.id, ...item.data()})
        })
       setData(todos)
      })
 }, [collctionName])

 return {data}
}


