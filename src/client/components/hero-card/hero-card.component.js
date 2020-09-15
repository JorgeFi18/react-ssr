import React, { useState } from 'react';
import moment from 'moment';

import HeroImage from '../hero-image/hero-image.component';
import HeroDescription from '../hero-description/hero-description.component'

import './hero-card.style.styl';

const HeroCard = ({name, thumbnail, modified, description}) => {
    const [ heroSelected, setHeroSelected ] = useState(false);

    const cardThumbnail = `${thumbnail.path}.${thumbnail.extension}`;

    return <div className='hero-card'>
                <div
                    className='hero-card__background'
                    style={{ background: `url(${cardThumbnail}) center center`}}
                >
                </div>
                <div
                    className='hero-card__foreground'
                    onClick={()=> setHeroSelected(!heroSelected)}
                >
                    <HeroImage thumbnail={cardThumbnail} />
                    <h2>{name}</h2>
                    { !heroSelected && <p>{moment(modified).format('MMMM Do YYYY')}</p>}
                    
                </div>
                { heroSelected &&
                    <HeroDescription description={description} onClose={()=> setHeroSelected(!heroSelected)}/>
                }
            </div>
}

export default HeroCard;