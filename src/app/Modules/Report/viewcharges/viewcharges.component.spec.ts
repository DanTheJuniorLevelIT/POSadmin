import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchargesComponent } from './viewcharges.component';

describe('ViewchargesComponent', () => {
  let component: ViewchargesComponent;
  let fixture: ComponentFixture<ViewchargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchargesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
