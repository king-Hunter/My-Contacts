import { TNumber } from '../types/type-number';

export interface ContactInterface {
    id: string;
    nickName: string;
    fullName: string;
    phone: PhoneInterface;
    email: string;
}

export interface PhoneInterface {
    phone: number;
    type: TNumber;
}
