import { Component, OnInit } from '@angular/core';
import {EmonData, EmonService} from '../../../services/emon.service';

declare function require(path: string): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: EmonData[];

  constructor(private emonService: EmonService) { }

  ngOnInit() {
    require('../../../../assets/js/charts.js')();
    this.getData();
  }

  getData(): void {
    this.emonService.getData().subscribe((result) => this.data = result);
  }

  getLatest(): EmonData {
    if (this.data !== undefined) {
      return this.data[0];
    } else {
      return EmonData.Empty();
    }
  }

  getUsage(): number {
    if (this.data !== undefined) {
      return Math.abs(this.data[0].energy_total - this.data[this.data.length - 1].energy_total);
    } else {
      return 0;
    }
  }

  getCurrentConsumption(): number {
    if (this.data !== undefined && this.data.length >= 2) {
      // in kW
      const delta_energy = Math.abs((this.data[0].energy_total - this.data[1].energy_total)); // kWh
      const delta_time = Math.abs((new Date(this.data[0].datetime).getTime() - new Date(this.data[1].datetime).getTime()) / 1000);  // sec

      return delta_energy * 3600000.0 / delta_time; // in kW
    } else {
      return 0;
    }
  }

}
