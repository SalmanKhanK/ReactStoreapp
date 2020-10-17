import React,{useContext} from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ContextProvider} from '../Hook/Createcontext';
import shoeProd from '../Api/shoe.json'
export const Shoes = () => {
    let shoesApi = Object.keys(shoeProd);
    const {addTrandsaction,filterState} = useContext(ContextProvider)
    console.log(filterState);
return (
 <Container >
     <Row className="justify-content-md-center">
         {
             shoesApi.map((data) => {
                 const shoeProduct=shoeProd[data];
                 return (
                     <Col xs={12} md={4} sm={6} key={data} >
                         <Card>
                             <Card.Header bg="dark" variant="light">{shoeProduct.price}$</Card.Header>
                             <Card.Img variant="top" src={`${shoeProduct.img}`} />
                             <Card.Body>
                                 <Card.Title>{shoeProduct.name}</Card.Title>
                                 <Card.Text>
                                     {shoeProduct.description}
                                 </Card.Text>
                                 <Card.Body>
                                 <Link to={`/Details/${data}`}><Button variant="dark">Details</Button></Link>
                                     {/* <Card.Link href="#">Add to cart</Card.Link> */}
                                     <Button variant="dark" onClick={()=>{
                                          addTrandsaction({
                                              name:shoeProduct.name,
                                              price:shoeProduct.price,
                                              img:shoeProduct.img,
                                              quantity:1,
                                              id:shoeProduct.id
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
