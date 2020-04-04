
import * as api from '../src/api';
import {ClassName} from '../src/ClassName';

describe('Public API', () => {
    it('ClassName', () => {
        expect(api.ClassName).toBe(ClassName);
    });
});
