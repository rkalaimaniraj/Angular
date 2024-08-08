import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  constructor(private router: Router) {}
  gotoAbout() {
    console.log('calling');
    this.router.navigate(['/about']);
  }
}
