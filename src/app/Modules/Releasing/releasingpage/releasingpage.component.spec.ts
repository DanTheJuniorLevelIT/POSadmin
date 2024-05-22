import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasingpageComponent } from './releasingpage.component';

describe('ReleasingpageComponent', () => {
  let component: ReleasingpageComponent;
  let fixture: ComponentFixture<ReleasingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleasingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReleasingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
