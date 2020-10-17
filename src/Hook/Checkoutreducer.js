import React from 'react'

export const Checkoutreducer = (state,action) => {
    switch(action.type){
        case "Checkout":{
            let totalPrice=action.payload;
            console.log(totalPrice);
            console.log("Hit checkout")
            return totalPrice
        }
        
    }
}
