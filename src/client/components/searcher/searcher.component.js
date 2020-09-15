import React from 'react';

import './searcher.style.styl';

const Searcher = ({onSearchChange}) => {
    return(
        <div className='searcher'>
            <input
                className='searcher__input'
                name='search'
                type='search'
                placeholder='Search for your character'
                onChange={onSearchChange}
                data-cy='search'
            />
        </div>
    )
};

export default Searcher;