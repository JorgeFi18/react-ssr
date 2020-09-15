import React from 'react';

import './hero-description.style.styl';

const HeroDescription = ({description, onClose}) => {
    return  <div className='description'>
                <button
                    className='description__close'
                    onClick={onClose}
                    data-cy='close-description'
                >
                    close
                </button>
                <p className='description__text'>
                    {description? description : 'No Description'}
                </p>
            </div>
}

export default HeroDescription;