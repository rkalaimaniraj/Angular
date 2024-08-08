import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { AboutAsComponent } from "../about-as/about-as.component";
import { PaymentmodeComponent } from "../paymentmode/paymentmode.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, AboutAsComponent, PaymentmodeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
