export interface AddressPayload {

    city: string;
    country: string;
    flat: string;
    landmark: string;
    mobile: string;
    passcode: string;
    state: string;
    street: string;
}

export interface AddressPayloadSuccess {
    msg: string;
    user: User;


}


interface User {
    address: Address
    _id: string;
    name: string;
    email: string;
    password: string;
    avatar: string;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
    _v: number;
}

interface Address {

    flat: string;
    street: string;
    landmark: string;
    city: string;
    state: string;
    country: string;
    passcode: string;
    mobile: string;
}