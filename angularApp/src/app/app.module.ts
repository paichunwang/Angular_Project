import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightdarkmodeComponent } from './components/lightdarkmode/lightdarkmode.component';
import { TrueFluidTypeComponent } from './components/true-fluid-type/true-fluid-type.component';
import { ThreejsComponent } from './components/threejs/threejs.component';
import { LaxxxScrollComponent } from './components/laxxx-scroll/laxxx-scroll.component';
import { PureVanillaJSParallaxComponent } from './components/pure-vanilla-jsparallax/pure-vanilla-jsparallax.component';

@NgModule({
  declarations: [
    AppComponent,
    LightdarkmodeComponent,
    TrueFluidTypeComponent,
    ThreejsComponent,
    LaxxxScrollComponent,
    PureVanillaJSParallaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
