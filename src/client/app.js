import React, { useState, useEffect } from 'react';

import { getHeros } from './api';

import Header from './components/header/header.component';
import HerosList from './components/heros-list/heros-list.component';
import Searcher from './components/searcher/searcher.component';
import Filter from './components/filter/filter.component';

import './app.styl';

const App = () => {
    const [heros, setHeros] = useState([]);
    const [search, setSearch] = useState('');
    const [filterBy, setFilterBy] = useState('name');

    useEffect(() => {
        (async ()=> {
            const newHeros = await getHeros(filterBy);
            setHeros(newHeros);
        })();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleFilter = async (e) => {
        setFilterBy(e.target.value);
        const newHeros = await getHeros(e.target.value);
        setHeros(newHeros);
    }

    const filteredHeros =
        heros.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div>
            <Header />
            <Searcher onSearchChange={handleSearch} />
            <Filter filterBy={filterBy} onFilterChange={handleFilter}/>
            <HerosList heros={filteredHeros}/>
        </div>
    );
};

export default App;