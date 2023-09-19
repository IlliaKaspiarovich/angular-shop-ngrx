import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() product: Product
  @Output() closeModalEvent = new EventEmitter();

  constructor(private cartService: CartService) { }

  closeModal() {
    this.closeModalEvent.emit();
  }

  onModalClick(event: MouseEvent) {
    event.stopPropagation()
  }

  addToCart() {
    this.cartService.addCartItemById(this.product.id)
  }
}
