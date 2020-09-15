import React from 'react';
import renderer from 'react-test-renderer';
import Searcher from './searcher.component';

describe('Searcher component', () => {
    it('Should enter hello text', () => {
        let text = '';
        const changeText = e => {text = e};

        const component = renderer.create(
            <Searcher onSearchChange={changeText}/>
        )

        let tree = component.toJSON();
        const [ input ] = tree.children;
        input.props.onChange('hello');

        expect(text).toBe('hello');
    });

    it('Should check input placeholder', ()=> {
        const component = renderer.create(
            <Searcher />
        )

        let tree = component.toJSON();
        const [ input ] = tree.children;

        expect(input.props.placeholder).not.toBe('coconut');
    });

    it('Should match with snapshot', ()=> {
        const component = renderer.create(
            <Searcher />
        )

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});