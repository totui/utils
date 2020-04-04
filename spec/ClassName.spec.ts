
import {ClassName} from '../src/ClassName';

describe('ClassName', () => {
    it('does a single class', () => {
        let classes = ClassName.execute({
            test: true
        });

        expect(classes.split(' ').indexOf('test')).toBeGreaterThan(-1);
    });

    it('does no classes', () => {
        let classes = ClassName.execute({
            test: false
        });

        expect(classes).toBe('');
    });

    it('does more than 1 class', () => {
        let classes  = ClassName.execute({
            test: true,
            abc: true,
            fail: false
        });

        let list = classes.split(' ');
        expect(list.indexOf('test')).toBeGreaterThan(-1);
        expect(list.indexOf('abc')).toBeGreaterThan(-1);
        expect(list.indexOf('fail')).toBe(-1);
    });

    it('can have default classes', () => {
        let classes = ClassName.execute({
            test: false
        }, [ 'default' ]);

        let list = classes.split(' ');
        expect(list.indexOf('default')).toBeGreaterThan(-1);
        expect(list.indexOf('test')).toBe(-1);
    });
});
