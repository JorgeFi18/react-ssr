import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.component';

describe('Header component', () => {

    it('Logo test should match with snapshot', ()=> {
        const component = renderer.create(
            <Header />
        )

        const tree = component.toJSON();
        const [ figure ] = tree.children;

        expect(figure.children).toMatchSnapshot();
    });
});