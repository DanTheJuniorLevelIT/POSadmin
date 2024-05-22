import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepancypageComponent } from './discrepancypage.component';

describe('DiscrepancypageComponent', () => {
  let component: DiscrepancypageComponent;
  let fixture: ComponentFixture<DiscrepancypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscrepancypageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscrepancypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
