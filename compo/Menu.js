import { mainMenu } from "../menu/Mainmenu";
import Button from "./Button";
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"
import {addToCart} from "../RTK/slices/GetProduct"
import { addArray } from "../RTK/slices/dashboardSand"
import { ReactComponent as Bolt } from "../icons/bolt-lightning-solid.svg"
import { fetchproducts } from "../RTK/slices/GetProductsFromjson";
import { ReactComponent as  User} from "../icons/circle-user-regular.svg"
import {Link} from "react-router-dom";

function Menu() {
    const productsa = useSelector(state => state.products)
    const dispatch = useDispatch()
    const handelMenuBtnClick = (ele) =>{
     dispatch(addToCart(ele))
    }

    return (
        <>
        <div className="container text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-20">
            {mainMenu.map(ele => {
                 if (ele.type !== "Custom") {
                   return (
                    <div className="flex relative justify-center items-center flex-col drop-shadow-2xl bg-orange-950 rounded-md pb-6" id={ele.id}>
                <div className="w-full max-w-sm max-h-72 p-7 flex justify-center items-center">
                     <img className="w-full" src={ele.img}/>
                    </div>
                <h1 className="text-orange-500 font-bold text-3xl">{ele.title}</h1>
                <div className="sm:m-0 px-3 text-center max-h-40 overflow-auto">
                <spna className="text-orange-500 text-lg">ingredients:</spna>
                {ele.ingredients.map(ele => {
                      return (
                         <p className="inline-block ml-2 text-slate-200">{ele}</p>
                         )
                })}
                <p className="text-orange-500 text-lg">Price : <span className="text-slate-200">$ {ele.price}</span></p>
                    </div>
                    <Button handelBtnClick={() => handelMenuBtnClick(ele)} text="Add To Cart"/>
                    </div> 
                   )
                }else {
                    return (
                        <div className="flex relative justify-center items-center flex-col drop-shadow-2xl bg-orange-950 rounded-md pb-6" id={ele.id}>
                        <spna>
                        <User className="absolute top-7 left-7 w-7 h-7 fill-orange-500 "/> 
                        </spna>
                    <div className="w-full max-w-sm max-h-72 p-7 flex justify-center items-center">
                         <img className="w-full" src={ele.img}/>
                        </div>
                    <h1 className="text-orange-500 font-bold text-3xl">{ele.title}</h1>
                    <div className="mb-7 sm:m-0 px-3 text-center max-h-40 overflow-auto">
                    <spna className="text-orange-500 text-lg">ingredients:</spna>
                    {ele.ingredients.map(ele => {
                          return (
                             <p className="inline-block ml-2 text-slate-200">{ele}</p>
                             )
                    })}
                    <p className="text-orange-500 text-lg">Price : <span className="text-slate-200">$ {ele.price}</span></p>
                        </div>
                        <Button handelBtnClick={() => handelMenuBtnClick(ele)} text="Add To Cart"/>
                        </div> 
                    )
                }
            })}
            </div>
        <div>
               <div className="mb-5">
               <p className="text-2xl sm:text-4xl text-slate-200">You Want To Build Your Own Sandwitch?</p>
               <p className="text-2xl sm:text-4xl text-slate-200 inline-block mt-3">Build It Now</p>
               <Bolt className="ml-2 fill-orange-500 w-7 h-7 inline-block"/>
               </div>
               <Link to="/makesandwitch" className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl mt-7 hover:bg-orange-700 duration-300">Here</Link>
           </div>   
        </div>
        </>
    )
}


export default Menu;