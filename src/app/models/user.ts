interface ILogin {
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
}

interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress extends IGeo {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser extends ILogin, IAddress, ICompany {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    birthDate: string;
    login: ILogin;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}