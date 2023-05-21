import { Component, computed } from '@angular/core';
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
  constructor(private vehicleService: VehicleService) {}
}
