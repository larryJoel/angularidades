import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponents } from './components/body/body.component';
import { FooterComponents } from './components/footer/footer.component';
import { HeaderComponents} from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponents,
    FooterComponents,
    HeaderComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
