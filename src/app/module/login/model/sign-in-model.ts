import { SignInInterface } from '../interface/sign-in-interface';

export class SignInModel implements SignInInterface {
    constructor(public user: string = null, public password: string = null) { }
}

export class DefaultSignIn implements SignInInterface {
    user: string;
    password: string;
    constructor() {
        this.user = 'admin';
        this.password = 'admin';
    }
}
