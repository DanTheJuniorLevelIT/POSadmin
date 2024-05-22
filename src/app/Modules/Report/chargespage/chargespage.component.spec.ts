import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargespageComponent } from './chargespage.component';

describe('ChargespageComponent', () => {
  let component: ChargespageComponent;
  let fixture: ComponentFixture<ChargespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargespageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChargespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
