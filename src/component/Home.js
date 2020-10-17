import React,{useContext,useState} from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Homeprod from '../Api/Homeprod.json'
import {ContextProvider} from '../Hook/Createcontext';
export const Home = () => {
    let homeApi = Object.keys(Homeprod);
           const {addTrandsaction,filterState} = useContext(ContextProvider)
           console.log(filterState);
    return (
        <Container >
            <Row className="justify-content-md-center">
                {
                    homeApi.map((data) => {
                        const homeProduct=Homeprod[data];
                        return (
                            <Col xs={12} md={4} sm={6} key={data} >
                                <Card>
                                    <Card.Header bg="dark" variant="light">{homeProduct.price}$</Card.Header>
                                    <Card.Img variant="top" src={`${homeProduct.img}`} />
                                    <Card.Body>
                                        <Card.Title>{homeProduct.name}</Card.Title>
                                        <Card.Text>
                                            {homeProduct.description}
                                        </Card.Text>
                                        <Card.Body>
                                        <Link to={`/Details/${data}`}><Button variant="dark">Details</Button></Link>
                                            {/* <Card.Link href="#">Add to cart</Card.Link> */}
                                            <Button variant="dark" onClick={()=>{
                                                 addTrandsaction({
                                                     name:homeProduct.name,
                                                     price:homeProduct.price,
                                                     img:homeProduct.img,
                                                     quantity:1,
                                                     id:homeProduct.id
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
