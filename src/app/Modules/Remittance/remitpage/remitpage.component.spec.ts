import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitpageComponent } from './remitpage.component';

describe('RemitpageComponent', () => {
  let component: RemitpageComponent;
  let fixture: ComponentFixture<RemitpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemitpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
