import { useContext } from "react";
import { MyContext } from "../context/GlobalContext";
export const useMyContext = ()=>{
    const context = useContext(MyContext);
    if(!context){
        throw new Error( "MyContext API ni faqatgina GlobalProvider o'rab olgan joylardagina ishlatishing kerek")
    }
    return context
}