import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import "typeturajs";

import { TrueFluidTypeComponent } from "./true-fluid-type.component";

describe("TrueFluidTypeComponent", () => {
  let component: TrueFluidTypeComponent;
  let fixture: ComponentFixture<TrueFluidTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrueFluidTypeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFluidTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
