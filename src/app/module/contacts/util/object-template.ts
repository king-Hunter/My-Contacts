import { TNumber } from '../types/type-number';

export class TemplateObject {

    public templatePhone(): TNumber[] {
        const array: Array<TNumber> = [];
        array.push('casa');
        array.push('movil');
        array.push('trabajo');
        array.push('otro');
        return array;
    }

}
