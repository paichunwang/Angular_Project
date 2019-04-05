import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadjsComponent } from './preloadjs.component';

describe('PreloadjsComponent', () => {
  let component: PreloadjsComponent;
  let fixture: ComponentFixture<PreloadjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
