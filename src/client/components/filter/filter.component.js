import React from 'react';

import './filter.style.styl';

const Filter = ({filterBy, onFilterChange}) =>{
    return(
        <div className='filter'>
            <p className='filter__label'>Filter by:</p>
            <select className='filter__input' value={filterBy} onChange={onFilterChange}>
                <option value='name'>Name (ASC)</option>
                <option value='modified'>Date (ASC)</option>
                <option value='-name'>Name (DESC)</option>
                <option value='-modified'>Date (DESC)</option>
            </select>
        </div>
    );
}

export default Filter;