import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidokWolontariuszaComponent } from './widok-wolontariusza.component';

describe('WidokWolontariuszaComponent', () => {
  let component: WidokWolontariuszaComponent;
  let fixture: ComponentFixture<WidokWolontariuszaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidokWolontariuszaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidokWolontariuszaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
