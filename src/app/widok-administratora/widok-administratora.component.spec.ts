import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidokAdministratoraComponent } from './widok-administratora.component';

describe('WidokAdministratoraComponent', () => {
  let component: WidokAdministratoraComponent;
  let fixture: ComponentFixture<WidokAdministratoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidokAdministratoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidokAdministratoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
