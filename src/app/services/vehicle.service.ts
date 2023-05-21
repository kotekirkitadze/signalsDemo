import { Injectable, signal } from '@angular/core';
import { Film, Vehicle } from '../models/model';
import { forkJoin, of, switchMap, filter, Observable } from 'rxjs';
import { Vehicles } from './data';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}
  private vehicles$ = of<Vehicle[]>(Vehicles);
  vehicles = toSignal<Vehicle[]>(this.vehicles$);

  selectedVehicle = signal<Vehicle | undefined>(undefined);
  private vehicleFilms$: Observable<Film[]> = toObservable(
    this.selectedVehicle
  ).pipe(
    filter(Boolean),
    switchMap((vehicle) => {
      return forkJoin(vehicle.films.map((film) => this.http.get<Film>(film)));
    })
  );

  vehicleFilms = toSignal<Film[]>(this.vehicleFilms$);

  vehicleSelected(name: string) {
    const selectedVehicle = Vehicles.find((v) => v.name === name);
    this.selectedVehicle.set(selectedVehicle);
  }
}
