import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremitComponent } from './addremit.component';

describe('AddremitComponent', () => {
  let component: AddremitComponent;
  let fixture: ComponentFixture<AddremitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddremitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddremitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
