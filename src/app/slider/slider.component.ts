import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

}
