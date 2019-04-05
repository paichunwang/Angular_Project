import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureVanillaJSParallaxComponent } from './pure-vanilla-jsparallax.component';

describe('PureVanillaJSParallaxComponent', () => {
  let component: PureVanillaJSParallaxComponent;
  let fixture: ComponentFixture<PureVanillaJSParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureVanillaJSParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureVanillaJSParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
