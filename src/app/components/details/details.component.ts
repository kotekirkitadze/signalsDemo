import { Component, computed } from '@angular/core';
import { Vehicle } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  selectedVehicle = this.vehicleService.selectedVehicle;
  vehicleTitle = computed(() =>
    this.selectedVehicle() ? `${this.selectedVehicle()?.name}` : ''
  );
  selectedVehicleFilms = this.vehicleService.vehicleFilms;
  constructor(
    private vehicleService: VehicleService,
    private cartService: CartService
  ) {}

  addToCart(vehicle: Vehicle | undefined) {
    if (!vehicle) return;
    this.cartService.addToCart(vehicle);
  }
}
