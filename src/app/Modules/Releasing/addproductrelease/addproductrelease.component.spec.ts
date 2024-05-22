import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductreleaseComponent } from './addproductrelease.component';

describe('AddproductreleaseComponent', () => {
  let component: AddproductreleaseComponent;
  let fixture: ComponentFixture<AddproductreleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddproductreleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddproductreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
