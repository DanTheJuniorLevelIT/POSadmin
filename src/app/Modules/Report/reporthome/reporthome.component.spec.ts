import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporthomeComponent } from './reporthome.component';

describe('ReporthomeComponent', () => {
  let component: ReporthomeComponent;
  let fixture: ComponentFixture<ReporthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
