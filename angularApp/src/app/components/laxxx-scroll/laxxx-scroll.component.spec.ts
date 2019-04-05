import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxxxScrollComponent } from './laxxx-scroll.component';

describe('LaxxxScrollComponent', () => {
  let component: LaxxxScrollComponent;
  let fixture: ComponentFixture<LaxxxScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaxxxScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaxxxScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
