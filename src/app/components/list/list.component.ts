import { Component } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  vehicles = this.vehicleService.vehicles;
  selectedVehicle = this.vehicleService.selectedVehicle;
  constructor(private vehicleService: VehicleService) {}

  onVehicleSelect(name: string) {
    this.vehicleService.vehicleSelected(name);
  }
}
