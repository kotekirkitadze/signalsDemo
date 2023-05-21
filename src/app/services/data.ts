import { Vehicle } from '../models/model';

export const Vehicles: Vehicle[] = [
  {
    cargo_capacity: 50000,
    crew: 46,
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost_in_Credits: '240000',
    passengers: 75,
    vehicle_class: 'landing craft',
    films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/'],
    price: 240000,
  },
  {
    cargo_capacity: 80000,
    crew: 1,
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    manufacturer:
      'Imperial Department of Military Research, Sienar Fleet Systems',
    cost_in_Credits: '1000000000000',
    passengers: 843342,
    vehicle_class: 'Deep Space Mobile Battlestation',
    films: ['https://swapi.dev/api/films/3/'],
    price: 1000000000000,
  },
  {
    cargo_capacity: 50000,
    crew: 1,
    price: 100000,
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_Credits: '100000',
    passengers: 6,
    vehicle_class: 'Light freighter',
    films: ['https://swapi.dev/api/films/1/'],
  },
];
