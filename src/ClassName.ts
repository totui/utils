
import {IDictionary} from '@totalpave/interfaces';

export class ClassName {
    private constructor() {}

    public static execute(classes: IDictionary<boolean>, defaultClasses?: Array<string>): string {
        let classString = '';

        if (!classes) {
            classes = {};
        }

        for (let i in classes) {
            if (classes[i]) {
                if (classString === '') {
                    classString += i;
                }
                else {
                    classString += ' ' + i;
                }
            }
        }

        if (defaultClasses) {
            classString += ' ' + defaultClasses.join(' ');
        }

        return classString;
    }
}
