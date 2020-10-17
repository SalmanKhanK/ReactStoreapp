import React, { createContext, useReducer } from 'react';
import reducer  from './Createreducer';
export const ContextProvider=createContext();
const Initialtransaction=[];
export const Transaction=({children})=>{
    const [state,dispatch]=useReducer(reducer,Initialtransaction);
     function addTrandsaction(transObj){
         dispatch({
             type:"Add",
             payload:{
                 price:transObj.price,
                 name:transObj.name,
                 img:transObj.img,
                 quantity:transObj.quantity,
                 id:transObj.id

             }
         })
     }
     function delleteTransaction(transObj){
         dispatch({
             type:"Delete",
             payload:{
                 id:transObj.id
             }
         })
     }
     function updateTransaction(transObj){
        dispatch({
            type:"update",
            payload:transObj
        })
    }

     return(
         <ContextProvider.Provider value={
             {
                 filterState:state,
                 addTrandsaction,
                 delleteTransaction,
                 updateTransaction,
               
             }
         }>
            {children}
         </ContextProvider.Provider>

     )
}