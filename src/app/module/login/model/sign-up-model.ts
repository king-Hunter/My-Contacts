import { SignUpInterface } from './../interface/sign-up-interface';
export class SignUpModel implements SignUpInterface {
    public name: string;
    public email: string;
    public password: string;
    public repeatPassword: string;
    constructor(name: string = null, email: string = null, password: string = null) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.repeatPassword = password;
    }

}
