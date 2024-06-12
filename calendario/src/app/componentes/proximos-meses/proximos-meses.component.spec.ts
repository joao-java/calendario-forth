import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosMesesComponent } from './proximos-meses.component';

describe('ProximosMesesComponent', () => {
  let component: ProximosMesesComponent;
  let fixture: ComponentFixture<ProximosMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximosMesesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProximosMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
