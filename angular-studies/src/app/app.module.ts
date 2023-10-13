import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ButtonComponent } from './button/button.component';
import { TitleOnInitComponent } from './title-on-init/title-on-init.component';
import { NgifComponent } from './ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    TitleOnInitComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
