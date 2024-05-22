import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancepageComponent } from './balancepage.component';

describe('BalancepageComponent', () => {
  let component: BalancepageComponent;
  let fixture: ComponentFixture<BalancepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalancepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalancepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
