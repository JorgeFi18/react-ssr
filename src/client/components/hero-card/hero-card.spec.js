import React from 'react';
import renderer from 'react-test-renderer';
import HeroCard from './hero-card.component';

const mockHero = {
    name: 'Drax',
    thumbnail: 'path/to/img',
    modified:'2014-04-29T14:18:17-0400',
    description: ''
};

describe('Hero Card component', () => {

    it('Name should be Drax', () => {
        const component = renderer.create(
            <HeroCard {...mockHero} />
        )

        const tree = component.toJSON();
        const [ , foreground ] = tree.children;
        const [ , nameWrapper ] = foreground.children;
        const name = nameWrapper.children[0];

        expect(name).toBe('Drax');
    });

    it('Should match with snapshot', () => {
        const component = renderer.create(
            <HeroCard {...mockHero} />
        )

        const tree = component.toJSON();
        const [ , foreground ] = tree.children;
        const [ , , dateWrapper ] = foreground.children;
        const date = dateWrapper.children[0];

        expect(date).toMatchSnapshot();
    });
});