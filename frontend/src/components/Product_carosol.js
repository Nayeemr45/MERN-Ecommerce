import React from 'react'
import { Container, Carousel , Image } from 'react-bootstrap';
import image2 from '../asset/Images/i4.jpg'
import image3 from '../asset/Images/i5.jpg'
const Product_carosol = () => {
    return (
        <Container fluid>
            <Carousel fade>
                <Carousel.Item>
                    <Image
                    className="d-block w-100"
                    src={image3}
                    alt="First slidee"
                    fluid />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Product_carosol
