import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { BlogAkcjiComponent } from './blog-akcji/blog-akcji.component';




@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  imports:[BlogAkcjiComponent, RouterOutlet, RouterLink, RouterLinkActive],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}
