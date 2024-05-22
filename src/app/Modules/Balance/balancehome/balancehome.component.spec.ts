import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancehomeComponent } from './balancehome.component';

describe('BalancehomeComponent', () => {
  let component: BalancehomeComponent;
  let fixture: ComponentFixture<BalancehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalancehomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalancehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
