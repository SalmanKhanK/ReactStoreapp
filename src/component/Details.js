import React,{useContext}from 'react'
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Container,Carousel } from 'react-bootstrap';
import Homeprod from '../Api/Homeprod.json';
import {ContextProvider} from '../Hook/Createcontext';
export const Details = () => {
    const {addTrandsaction,filterState} = useContext(ContextProvider)
    console.log(filterState);
        const {id}=useParams();
        const homeprod=Homeprod[id];
        if(!homeprod){
            return <>Product not found</>
        }
      let imgGallery=homeprod.imgGallery;
      console.log(imgGallery)
    return (
        <div>
            <Row className="justify-content-md-center">
            <Col xs={12} md={6} sm={12}>
            <Carousel>
                {
                    imgGallery.map((gallery)=>{
                        console.log(gallery,"Gallery")
                        return(
                            <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100" 
                            src={`${gallery}`}
                            alt="First slide"
                     
                            />
                            
                        </Carousel.Item>
                        )
                    })
                }
           
    </Carousel>
                 {/* <img src={`${homeprod.img}`} /> */}
            </Col>
            <Col xs={12} md={6} sm={6}>
                 <h3>{homeprod.name}</h3> 
                 <h4>Price:{homeprod.price}$</h4>
                 <h4>Description</h4>
                 <br/>
                 <p>{homeprod.description}</p>
                 <br/>
                 <Button variant="dark" onClick={()=>{
                                                 addTrandsaction({
                                                     name:homeprod.name,
                                                     price:homeprod.price,
                                                     img:homeprod.img,
                                                     quantity:1,
                                                     id:homeprod.id
                                                 })
                                            }}>Add to Cart</Button>
            </Col>
            </Row>
        </div>
    )
}
