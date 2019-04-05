import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TrueFluidTypeComponent } from "./components/true-fluid-type/true-fluid-type.component";
import { LightdarkmodeComponent } from "../app/components/lightdarkmode/lightdarkmode.component";
import { ThreejsComponent } from "../app/components/threejs/threejs.component";
import { LaxxxScrollComponent } from "../app/components/laxxx-scroll/laxxx-scroll.component";
import { PureVanillaJSParallaxComponent } from "../app/components/pure-vanilla-jsparallax/pure-vanilla-jsparallax.component";
import { PreloadjsComponent } from "../app/components/preloadjs/preloadjs.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "truefluid",
    component: TrueFluidTypeComponent
  },
  {
    path: "lightdark",
    component: LightdarkmodeComponent
  },
  {
    path: "threejs",
    component: ThreejsComponent
  },
  {
    path: "laxxx",
    component: LaxxxScrollComponent
  },
  {
    path: "purecssparallax",
    component: PureVanillaJSParallaxComponent
  },
  {
    path: "preloader",
    component: PreloadjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
