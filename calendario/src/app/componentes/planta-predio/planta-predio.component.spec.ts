import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaPredioComponent } from './planta-predio.component';

describe('PlantaPredioComponent', () => {
  let component: PlantaPredioComponent;
  let fixture: ComponentFixture<PlantaPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantaPredioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantaPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
