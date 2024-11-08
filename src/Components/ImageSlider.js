import React from 'react';
import './ImageSlider.css';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {
    return (
        <div className='slider'>
            {/* Message section */}
            <div className="welcome-message">
                <h2>Unlock a world of knowledge and imagination.</h2>
                <p>At The Book Loft, we believe that every book holds a world of its own, ready to inspire, educate
                    , and entertain. Our loft is a haven where stories come alive, where knowledge is celebrated, 
                    and where every reader finds a place to belong. With shelves filled with timeless classics, 
                    cutting-edge ideas, and endless tales of adventure, there’s something here for every curious mind</p>
            </div>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/11/29/07/21/book-1868068_1280.jpg"
                        alt="Search Books"
                    />
                  
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2022/12/01/00/13/antique-7627999_1280.jpg"
                        alt="Organize and Categorize"
                    />
                  
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2021/08/02/11/03/hallelujah-6516410_1280.jpg"
                        alt="Track Borrowing History"
                    />
                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageSlider;
