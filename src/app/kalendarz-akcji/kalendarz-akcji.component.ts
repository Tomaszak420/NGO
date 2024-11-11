import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-kalendarz-akcji',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './kalendarz-akcji.component.html',
  styleUrl: './kalendarz-akcji.component.css'
})
export class KalendarzAkcjiComponent {

}
