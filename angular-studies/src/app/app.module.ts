import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ButtonComponent } from './button/button.component';
import { TitleOnInitComponent } from './title-on-init/title-on-init.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    TitleOnInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
