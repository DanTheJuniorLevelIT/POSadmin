import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasinghomeComponent } from './releasinghome.component';

describe('ReleasinghomeComponent', () => {
  let component: ReleasinghomeComponent;
  let fixture: ComponentFixture<ReleasinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleasinghomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReleasinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
