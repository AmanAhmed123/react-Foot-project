import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getingredients} from "../RTK/slices/CustomSandingredients";
import {remaoveingredients} from "../RTK/slices/CustomSandingredients";

function ImageIngredints ({srcImage,ingredname}) {
const dispatch = useDispatch()
const products = useSelector(state => state.sanding)
const [item,setitem] = useState(true);
const obj = {
  name: ""
}

const handleChange = (data) => {
     if (data == {ingredname}.ingredname) 
     {
      const date = Date.now()
       if (item == true) 
       {
         obj.name = data
        dispatch(getingredients(obj))
       }else{
        obj.name = data
        dispatch(remaoveingredients(obj))
       }
       setitem(!item)
     }
 }
  return (
    <div className="flex justify-center items-center flex-col">
        <div className="sm:max-w-xs" style={{ maxWidth :"80px" }}>
           <img className="w-full" src={srcImage}/>
        </div>
         <div className="text-center">
         <input onChange={() => handleChange({ingredname}.ingredname)} className="mr-2 cursor-pointer" id={ingredname} type="checkbox" value={ingredname}/>
        <label for={ingredname} className="text-slate-200 cursor-pointer">{ingredname}</label>
         </div>
      </div>
    )
}

export default ImageIngredints;