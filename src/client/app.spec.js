import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe('App component', ()=>{
    it('Should match with snapshot', () => {
        const component = renderer.create(
            <App />
        )

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});