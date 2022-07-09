export interface IAddress {
    street: string;
    zipcode: string;
    city: string;
}

export interface IUsers {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}