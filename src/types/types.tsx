export interface IAddress {
    street: string;
    zipcode: string;
    city: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}