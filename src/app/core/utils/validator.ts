import { Option } from './../../module/contacts/types/type-option';
import { SignInInterface } from './../../module/login/interface/sign-in-interface';

export class Validator {

    public validateObj(source: SignInInterface, target: SignInInterface): boolean {
        return JSON.stringify(source) === JSON.stringify(target);
    }

    public validateOption(option: Option){
        return (option === 'agregar');
    }
}
