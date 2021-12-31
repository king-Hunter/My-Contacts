import { TNumber } from '../types/type-number';
import { ContactInterface, PhoneInterface } from './../interface/contact-interface';

export class ContactModel implements ContactInterface {
    public id: string;
    public nickName: string;
    public fullName: string;
    public phone: PhoneInterface;
    public email: string;
    constructor(
        id: string = null,
        nickName: string = null,
        fullName: string = null,
        phone: PhoneInterface = new PhoneModel(),
        email: string = null
    ) {
        this.id = id;
        this.nickName = nickName;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
    }
}
export class PhoneModel implements PhoneInterface {
    public phone: number;
    public type: TNumber;
    constructor(
        phone: number = null,
        type: TNumber = null
    ) {
        this.phone = phone;
        this.type = type;
    }
}
