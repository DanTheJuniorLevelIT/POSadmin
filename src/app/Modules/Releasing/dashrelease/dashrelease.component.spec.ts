import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashreleaseComponent } from './dashrelease.component';

describe('DashreleaseComponent', () => {
  let component: DashreleaseComponent;
  let fixture: ComponentFixture<DashreleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashreleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
