import { Component } from '@angular/core';
import { ActionCardComponent } from './action-card/action-card.component';
interface Action {
  title: string;
  date: string;
  location: string;
  description: string;
  mainList:number;
  reserveList:number;
}
@Component({
  selector: 'app-blog-akcji',
  standalone: true,
  imports: [ActionCardComponent],
  templateUrl: './blog-akcji.component.html',
  styleUrl: './blog-akcji.component.scss'
})
export class BlogAkcjiComponent {
  actions: Action[] = [
    {
      title: 'Akcja 1',
      date: '24.01.2023',
      location: 'Kraków',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainList: 2,
      reserveList: 3
    },
    {
      title: 'Akcja 1',
      date: '24.01.2023',
      location: 'Kraków',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainList: 2,
      reserveList: 3
    },
    {
      title: 'Akcja 2',
      date: '24.01.2023',
      location: 'Kraków',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainList: 2,
      reserveList: 3
    },
    {
      title: 'Akcja 3',
      date: '24.01.2023',
      location: 'Kraków',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainList: 2,
      reserveList: 3
    },
    {
      title: 'Akcja 2',
      date: '24.01.2023',
      location: 'Kraków',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainList: 5,
      reserveList: 3
    },
    {
      title: 'Akcja 3',
      date: '24.01.2023',
      location: 'Kraków',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainList: 7,
      reserveList: 10
    }
  ];
}