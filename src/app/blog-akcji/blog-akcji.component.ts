import { Component } from '@angular/core';
import { ActionCardComponent } from './action-card/action-card.component';


@Component({
  selector: 'app-blog-akcji',
  standalone: true,
  imports: [ActionCardComponent],
  templateUrl: './blog-akcji.component.html',
  styleUrl: './blog-akcji.component.scss'
})

export class BlogAkcjiComponent {

}
