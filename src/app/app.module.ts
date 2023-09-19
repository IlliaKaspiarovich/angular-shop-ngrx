import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ProductCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
