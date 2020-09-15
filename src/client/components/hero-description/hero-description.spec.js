import React from 'react';
import renderer from 'react-test-renderer';
import HeroDescription from './hero-description.component';

describe('Hero Description component', () => {

    it('Trigger should be called', ()=> {
        const handleClick = jest.fn();

        const component = renderer.create(
            <HeroDescription onClose={handleClick} />
        )

        const tree = component.toJSON();
        const [ button ] = tree.children;
        button.props.onClick();

        expect(handleClick).toHaveBeenCalled();
    });

    it('Description should match with snapshot', () => {
        const component = renderer.create(
            <HeroDescription description='Cool description' />
        )

        const tree = component.toJSON();
        const [ , description ] = tree.children;

        expect(description).toMatchSnapshot();
    });
});