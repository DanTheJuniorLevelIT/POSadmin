import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditremitComponent } from './editremit.component';

describe('EditremitComponent', () => {
  let component: EditremitComponent;
  let fixture: ComponentFixture<EditremitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditremitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditremitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
