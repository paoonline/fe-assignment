interface Coordinates {
    lat: number;
    lng: number;
  }
  
  interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
  }
  
  interface Hair {
    color: string;
    type: string;
  }
  
  interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  }
  
  interface CompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
  }
  
  interface Company {
    department: string;
    name: string;
    title: string;
    address: CompanyAddress;
  }
  
  interface Crypto {
    coin: string;
    wallet: string;
    network: string;
  }
  
  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
    role: string;
  }
  

  export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    hair: { color: string; type: string };
    address: {
      address: string;
      city: string;
      state: string;
      postalCode: string;
    };
    company: {
      department: string;
    };
  }


export interface DepartmentSum {
    male: number;
    female: number;
    ageRange: string;
    hair: Record<string, number>;
    addressUser: Record<string, string>;
  }