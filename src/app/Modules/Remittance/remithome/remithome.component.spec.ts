import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemithomeComponent } from './remithome.component';

describe('RemithomeComponent', () => {
  let component: RemithomeComponent;
  let fixture: ComponentFixture<RemithomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemithomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemithomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
