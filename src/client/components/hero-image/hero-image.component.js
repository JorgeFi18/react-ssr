import React from 'react';

const HeroImage = ({thumbnail}) => {
    return (
        <img
            alt='hero'
            className='hero-card__image'
            src={thumbnail}
        />
    );
}

export default HeroImage;