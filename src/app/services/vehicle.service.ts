import { Injectable, signal } from '@angular/core';
import { Vehicle } from '../moels/model';
import { of } from 'rxjs';
import { Vehicles } from './data';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehicles$ = of<Vehicle[]>(Vehicles);
  vehicles = toSignal<Vehicle[]>(this.vehicles$);
  selectedVehicle = signal<Vehicle | undefined>(undefined);

  vehicleSelected(name: string) {
    const selectedVehicle = Vehicles.find((v) => v.name === name);
    this.selectedVehicle.set(selectedVehicle);
  }
}
