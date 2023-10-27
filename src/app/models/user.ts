interface Login {
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Address extends Geo {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User extends Login, Address, Company {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    birthDate: string;
    login: Login;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}