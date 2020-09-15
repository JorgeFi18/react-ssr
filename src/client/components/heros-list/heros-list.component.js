import React from 'react';

import HeroCard from '../hero-card/hero-card.component';

import './heros-list.style.sass';

const HerosList = ({heros}) => {
    return(
        <div className='heros-list'>
            {heros.map(hero => <HeroCard key={hero.id} {...hero} />)}
        </div>
    )
}

export default HerosList;