import React, { useContext ,useState} from 'react'
import { Button ,DropdownButton,Dropdown} from 'react-bootstrap';
import { ContextProvider } from '../Hook/Createcontext';
import {CheckoutProvider} from '../Hook/Checkoutcontext'
import '../App.css';
import { Link } from 'react-router-dom';

export const Cart = () => {
  
     var [cartState,setCartState]=useState(false);

    const { filterState, delleteTransaction ,updateTransaction} = useContext(ContextProvider);
    const {TotalPrice,Price} = useContext(CheckoutProvider);
    if(!filterState.length){
        return <h1 className="emptyCart">Empty Cart</h1>
    }

console.log(filterState,"filterState");
    const handleQuantity=(event,productId)=>{
        let quantityObj=filterState.filter(x=>x.id===productId)[0];
        quantityObj.quantity=Number(event.target.value);
        updateTransaction(quantityObj);
        console.log(filterState,"filterState");
        setCartState(true)
}
if(cartState){
    setCartState(false);
}
let subtotal=0;
let totalAmount=0;
let shipping=0;

for (let i=0;i<filterState.length;i++){
    subtotal+=filterState[i].price*filterState[i].quantity;
}
totalAmount=subtotal+shipping;
console.log(totalAmount,"UPdatedSUbtotal")

    return (
        <div className="rootCart">
            <div>
            {  
               
                filterState.map((data, key) => {
                   var price=data.price;
                 
                //    console.log(key,"keys")
                    return (
                        <div key={key} className="titlePrice">
                          <div  className="imgwidth">
                             <img alt="cartImg" src={`${data.img}`} width={120}/>

                          </div>
                           <div>
                              <div>
                                <h3>{data.name}</h3>
                              <p>Price:{price}$</p>
                              </div>
                                Select quantity
                                <select  
                                className="SelectQty"
                                value={data.quantity}
                                onChange={(ev)=>{handleQuantity(ev,data.id)}}
                               >
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                </select>
                       
                                <Button type="button" variant="danger"
                                onClick={()=>{
                                    delleteTransaction({
                                        id:data.id,
                                    })
                               }}
                               
                                >Remove</Button>
                              
                            </div>
                        </div>
                    )
                })
                
            }
            </div>
            <div className='summary'>
                <h3>Summaray</h3>
                <div className="subtotal">
                 <p>Subtotal</p>
                <p>{subtotal}$</p>
                </div>
                <div className="subtotal">
                 <p>Delivery charges</p>
                 <p>0$</p>
                </div>
                <hr />
                <div className="subtotal">
                 <p>Total</p>
                <p>{totalAmount}$</p>
                </div>
               <hr />
               <Link to="/Checkout"><Button variant="dark" onClick={()=>{
                   TotalPrice({
                     amount:totalAmount
                   })
               }} >Checkout</Button></Link>
            </div>
           
        </div>
    )
}
