import React from 'react';
import renderer from 'react-test-renderer';
import HeroImage from './hero-image.component';

describe('Hero Image component', () => {

    it('Should match with snapshot', () => {
        const component = renderer.create(
            <HeroImage thumbnail='path/to/my-image' />
        )

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});