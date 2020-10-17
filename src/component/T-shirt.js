import React,{useContext,useState} from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tshirtProd from '../Api/Tshirt.json'
import {ContextProvider} from '../Hook/Createcontext';

export const Tshirt = () => {
    let tshirtApi = Object.keys(tshirtProd);
    const {addTrandsaction,filterState} = useContext(ContextProvider)
    console.log(filterState);
return (
 <Container >
     <Row className="justify-content-md-center">
         {
             tshirtApi.map((data) => {
                 const tshirtPro=tshirtProd[data];
                 return (
                     <Col xs={12} md={4} sm={6} key={data} >
                         <Card>
                             <Card.Header bg="dark" variant="light">{tshirtPro.price}$</Card.Header>
                             <Card.Img variant="top" src={`${tshirtPro.img}`} />
                             <Card.Body>
                                 <Card.Title>{tshirtPro.name}</Card.Title>
                                 <Card.Text>
                                     {tshirtPro.description}
                                 </Card.Text>
                                 <Card.Body>
                                 <Link to={`/Details/${data}`}><Button variant="dark">Details</Button></Link>
                                     {/* <Card.Link href="#">Add to cart</Card.Link> */}
                                     <Button variant="dark" onClick={()=>{
                                          addTrandsaction({
                                              name:tshirtPro.name,
                                              price:tshirtPro.price,
                                              img:tshirtPro.img,
                                              quantity:1,
                                              id:tshirtPro.id
                                          })
                                          alert("Item added")
                                     }}>Add to Cart</Button>
                                 </Card.Body>
                             </Card.Body>
                         </Card>
                     </Col>
                 )
             })
         }

     </Row>
 </Container>

)
}
