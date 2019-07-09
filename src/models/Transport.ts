export interface Journey {
    transport: Transport;
    departureDate: Date;
    departureTime: string;
    arrivalDate: Date;
    arrivalTime: string;
    departure: ReachablePoint;
    arrival: ReachablePoint;
}

export interface ReachablePoint {
    name: string;
    latLng: [number, number];
}

export interface Transport {
    mode: TransportMode;
    price: Price;
    company?: Company;
}

export interface Company {
    name: string;
}

export enum TransportMode {
    RentCar,
    Plane,
    Train,
    Taxi,
    Uber,
    PersonnalCar
}

export interface Price {
    valueInCents: number;
    currency: Currency;
}

export enum Currency {
    CHF,
    EUR,
    USD,
}