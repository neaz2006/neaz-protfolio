
import React from 'react';
import { Image } from 'react-bootstrap';

const IntroImg = () => {
    const img = 'https://i.ibb.co/gyQ0bsG/IMG-20180101-WA0004.jpg';
    return (
        <div>
            <Image src={img} style={{height: '250px',borderRadius: '50px'}} />
            
        </div>
    );
};

export default IntroImg;