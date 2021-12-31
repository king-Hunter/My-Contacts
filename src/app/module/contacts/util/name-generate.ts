import { SignUpModel } from './../../login/model/sign-up-model';
import { SignUpInterface } from './../../login/interface/sign-up-interface';
import { NgForm } from '@angular/forms';
import { Option } from './../types/type-option';
import { TNumber } from './../types/type-number';
import { PhoneModel } from './../model/contact-model';
export class GeneratorM {

    public getnickName(form: NgForm) {
        return form.value.nick_name;
    }

    public generteNumbers(type: TNumber, phone: number) {
        return new PhoneModel(phone, type);
    }

    public generateEmails(email: string) {
        return email;
    }

    public account(form: NgForm) {
        const user: SignUpInterface = new SignUpModel();
        user.name = form.value.full_name;
        user.email = form.value.email;
        user.password = form.value.password;
        user.repeatPassword = form.value.repeat_password;
        return user;
    }
}
