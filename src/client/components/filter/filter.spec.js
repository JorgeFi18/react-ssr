import React from 'react';
import renderer from 'react-test-renderer';
import Filter from './filter.component';

describe('Filter component', () => {
    it('Should return -name value', () => {
        let value = '';
        const changeOption = e => {value = e};

        const component = renderer.create(
            <Filter filterBy={value} onFilterChange={changeOption}/>
        )

        let tree = component.toJSON();
        const [ , select ] = tree.children;
        select.props.onChange('-name');

        expect(value).toBe('-name');
    });

    it('Should check select default value', ()=> {

        const component = renderer.create(
            <Filter filterBy='modified' />
        )

        let tree = component.toJSON();
        const [ , select ] = tree.children;

        expect(select.props.value).toBe('modified');
    });

    it('Should match with snapshot', ()=> {
        const component = renderer.create(
            <Filter filterBy='name' />
        )

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});