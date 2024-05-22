import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashremitComponent } from './dashremit.component';

describe('DashremitComponent', () => {
  let component: DashremitComponent;
  let fixture: ComponentFixture<DashremitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashremitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashremitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
