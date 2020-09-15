import React from 'react';
import renderer from 'react-test-renderer';
import HerosList from './heros-list.component';

describe('Heros List component', () => {

    it('Should match with snapshot', () => {
        const component = renderer.create(
            <HerosList heros={[]} />
        )

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});