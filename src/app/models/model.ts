export interface VehicleResponse {
  count: number;
  next: string;
  previuos: string;
  result: Vehicle[];
}

export interface Vehicle {
  cargo_capacity: number;
  crew: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_Credits: string;
  passengers: number;
  vehicle_class: string;
  films: string[];
  price: number;
}

export interface Film {
  title: string;
}

export interface Cart {
  cartItems: CartItem[];
}

export interface CartItem {
  vehicle: Vehicle;
  quantity: number;
}
