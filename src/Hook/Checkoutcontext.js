
import React, { createContext, useReducer } from 'react';
import {Checkoutreducer} from './Checkoutreducer'
export const CheckoutProvider=createContext();
export const Checkoutcontext = ({children}) => {
    const [state,dispatch]=useReducer(Checkoutreducer,0);

    function TotalPrice(obj){
        dispatch({
            type:"Checkout",
            payload:obj.amount
        })
    }
    return(
        <CheckoutProvider.Provider value={
            {Price:state,
               TotalPrice
            }
            
}>
           {children}
        </CheckoutProvider.Provider>

    )

}
