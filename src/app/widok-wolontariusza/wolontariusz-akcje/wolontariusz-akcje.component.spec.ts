import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolontariuszAkcjeComponent } from './wolontariusz-akcje.component';

describe('WolontariuszAkcjeComponent', () => {
  let component: WolontariuszAkcjeComponent;
  let fixture: ComponentFixture<WolontariuszAkcjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WolontariuszAkcjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WolontariuszAkcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
