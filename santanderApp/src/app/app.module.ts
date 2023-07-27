import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';

import { SvgComponentsModule } from './modules/svg-components.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    CardBoxComponent,
    AmountBoxComponent,
    CarouselItemsComponent
  ],
  imports: [
    BrowserModule,
	SvgComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
