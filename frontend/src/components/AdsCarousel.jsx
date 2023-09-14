import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import imgSrc from "../images/1.jpg"

function Adscarousel() {

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return <>
    <div className='ads-carousel'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={imgSrc} alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={imgSrc} alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={imgSrc} alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    </>
}

export default Adscarousel;
