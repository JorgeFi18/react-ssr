import React from 'react';

import './hero-description.style.sass';

const HeroDescription = ({description, onClose}) => {
    return  <div className='description'>
                <button
                    className='description__close'
                    onClick={onClose}
                >close</button>
                <p className='description__text'>
                    {description? description : 'No Description'}
                </p>
            </div>
}

export default HeroDescription;