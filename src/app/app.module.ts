import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { reducer } from './store/reducer';
import { ProductsEffects } from './store/effects';

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
    StoreModule.forRoot({ appStore: reducer }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
