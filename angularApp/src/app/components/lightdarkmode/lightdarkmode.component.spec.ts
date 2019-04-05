import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightdarkmodeComponent } from './lightdarkmode.component';

describe('LightdarkmodeComponent', () => {
  let component: LightdarkmodeComponent;
  let fixture: ComponentFixture<LightdarkmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightdarkmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightdarkmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
