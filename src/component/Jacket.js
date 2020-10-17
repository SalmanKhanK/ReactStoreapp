import React,{useContext} from 'react'
import { Button, Row, Col, Container, Card, CardDeck } from 'react-bootstrap';
import jacketdata from '../Api/jacket.json';
import {ContextProvider} from '../Hook/Createcontext';
export const Jacket = () => {
    let jacketApi = Object.keys(jacketdata);
    const {addTrandsaction,filterState} = useContext(ContextProvider)
    console.log(filterState);
    return (

        <div>
            <Container>
                <Row>
                {
                    jacketApi.map((data,key)=>{
                        const jacketProd=jacketdata[data];
                        return(
                            <Col xs={12} md={4} sm={6} key={data} >
                            <CardDeck key={key}>
                            <Card  >
                            <Card.Header bg="dark" variant="light">{jacketProd.price}$</Card.Header>
                                <Card.Img variant="top" src={jacketProd.img}  />
                                <Card.Body>
                                    <Card.Title>{jacketProd.name}</Card.Title>
                                 <Card.Text>{jacketProd.description}</Card.Text>
                                </Card.Body>
                                <Button variant="dark" onClick={()=>{
                                                 addTrandsaction({
                                                     name:jacketProd.name,
                                                     price:jacketProd.price,
                                                     img:jacketProd.img,
                                                     quantity:1,
                                                     id:jacketProd.id
                                                 })
                                                 alert("Item added")
                                            }}>Add to Cart</Button>
                            </Card>
                        </CardDeck>
                        </Col>
                        )
                    })
                }
                </Row>
           
            </Container>
        </div>


    )
}
