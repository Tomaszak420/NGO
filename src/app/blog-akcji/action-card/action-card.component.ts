import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  standalone: true
})
export class ActionCardComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() location: string = '';
  @Input() description: string = '';
  @Input()  mainList: number = 0;
  @Input()  reserveList: number = 0;
}
