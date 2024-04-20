interface LoginPaylod {

    msg: string;
    token: string;
}

interface AuthPayloadError {

    errors: Error[];
}
interface Error {

    msg: string;
}


interface SignupPayload {

    name: string;
    email: string;
    password: string;
}

interface SignupPayloadSuccess {
    user: User;


}

interface User {

    address: Address;
    _id: string;
    name: string;
    email: string;
    isAdmin: string;
    avatar: string;
    createdAt: string;
    updateAt: string;
    _v: string;
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


