import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularTooltipComponent } from './angular-tooltip/angular-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularTooltipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
