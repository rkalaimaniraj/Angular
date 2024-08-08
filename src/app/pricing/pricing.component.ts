import { Component, OnInit } from '@angular/core';
import { PricingserviceService } from '../pricingservice.service';
import { log } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent implements OnInit {
  product: any;
  constructor(private prices: PricingserviceService, private l: Router) {}
  ngOnInit(): void {
    this.prices.getdata().subscribe({
      next: (data) => {
        // Handle the data
        this.product = data;
        console.log(data);
      },
      error: (error) => {
        // Handle the error
        console.error(error);
      },
    });
  }
  move() {
    this.l.navigate(['color']);
  }
}
