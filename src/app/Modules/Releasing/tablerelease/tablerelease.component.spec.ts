import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereleaseComponent } from './tablerelease.component';

describe('TablereleaseComponent', () => {
  let component: TablereleaseComponent;
  let fixture: ComponentFixture<TablereleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablereleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablereleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
