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


export interface GetUserInfo {

    user: User;
}


