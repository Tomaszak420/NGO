import { Component } from '@angular/core';

@Component({
  selector: 'app-wolontariusz-akcje',
  standalone: true,
  imports: [],
  templateUrl: './wolontariusz-akcje.component.html',
  styleUrl: './wolontariusz-akcje.component.scss'
})
export class WolontariuszAkcjeComponent {
  actions = [
    { id:1, title: 'Akcja 1', date: '24.01.2023', time: '09:00', location: 'Kraków', list: 'Podstawowa' },
    { id:2,title: 'Akcja 2', date: '24.01.2023', time: '10:00', location: 'Warszawa', list: 'Podstawowa' },
    { id:3,title: 'Akcja 3', date: '24.01.2023', time: '11:00', location: 'Gdańsk', list: 'Podstawowa' },
  ];
  
  activeActionIndex: number | null = null;

  toggleButtons(index: number) {
   
    this.activeActionIndex = this.activeActionIndex === index ? null : index;
  }

  editTime(event: Event) {
    event.stopPropagation();
    console.log('Zmiana godziny zapisu');
  }

  cancel(event: Event) {
    event.stopPropagation();
    console.log('Rezygnacja');
  }
}
