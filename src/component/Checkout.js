import React,{useContext,useState} from 'react'
import { Row, Form,Col,Container,Button,Spinner } from 'react-bootstrap';
import { ContextProvider } from '../Hook/Createcontext';
import '../Checkout.css';
import {CheckoutProvider} from '../Hook/Checkoutcontext'
export const Checkout = () => {
    const {TotalPrice,Price} = useContext(CheckoutProvider);
    const { filterState} = useContext(ContextProvider);
    const [spinner,Setspinner]=useState(false);
     const [firstName,Setfirstname]=useState("");
  
    if(spinner){
      return(
            <div className="center">
                  <h1>Thank You</h1>
                  <h3>Your order has been placed</h3>
            </div>
       )
    }

    console.log("Price",Price)
    let shipping=10;
    let tax=1;
    var total=Price+shipping+tax;

   function handleSubmit(event){
    event.preventDefault();
              Setspinner(true)
               console.log("active")
           
    }

    return (
<div>
    <h1 className="centertag mt">Checkout</h1>

<Container className="mt">
<Row>
    <Col xs={12} md={8}>
    <h5 className="ShippingColor">Shipping</h5>
  
  
   
<Form onSubmit={handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail" className="mt" >
      <Form.Control type="text"
      onChange={(ev)=>Setfirstname(ev.target.value)}
      placeholder="First Name" required/>
  </Form.Group>
  
    <Form.Group as={Col} controlId="formGridPassword" className="mt">
      <Form.Control type="text" placeholder="Last Name" required/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1" className="mt">
    <Form.Control placeholder="Enter Address" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity" className="mt">
        <Form.Control type="email" placeholder="Enter Email" required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState" className="mt">
      <Form.Control type="number" placeholder="Enter Phone Number" required/>
      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" className="mt">
    <Form.Control type="text" placeholder="Enter City" required/>
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
  
    <Form.Group as={Col} controlId="formGridCity" className="mt">
        <Form.Control type="number" placeholder="Card Number*" required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState" className="mt">
      <Form.Control type="text" placeholder="MM/YY*" required/>
      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" className="mt">
    <Form.Control type="text" placeholder="CVV*" required/>
    </Form.Group>
  </Form.Row>
  <Button variant="dark" type="submit" onClick={()=>handleSubmit}>Place Your Order</Button>
  </Form>
    </Col>
    <Col xs={12} md={4}>
    <h5 className="YourCart">In Your Cart</h5>
      <div className="total"> 
       <h5>Subtotal</h5>
       <h5>${Price}</h5>
      </div>
      <div className="total"> 
       <h5>Shipping</h5>
        <h5>${shipping}</h5>
      </div>
      <div className="total"> 
       <h5>Tax</h5>
        <h5>${tax}</h5>
      </div>
      <div className="total"> 
       <h4>Total</h4>
       <h4>${total}</h4>
      </div> 
      <h3>Your Items</h3>   
      <div>
        {
          filterState.map((data,key)=>{
            return(
              <div className="myCart" key={key}>
                    <div>
                      <img src={data.img} width={100}/>
                    </div>
                    <div>
                      <p>{data.name} <br/> Qty:{data.quantity} <br/> Price:{data.price}</p>
                      {/* <p>Qty:{data.quantity}</p>
                      <p>Price:{data.price}</p> */}
                    </div>
              </div>
            )
          })
        }
      </div>  
    </Col>
  </Row>
</Container>
</div>

    )
}
