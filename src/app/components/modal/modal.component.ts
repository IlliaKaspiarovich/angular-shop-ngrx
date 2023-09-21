import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { addToCart } from 'src/app/store/actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() product: Product
  @Output() closeModalEvent = new EventEmitter();

  constructor(private store: Store) { }

  closeModal() {
    this.closeModalEvent.emit();
  }

  onModalClick(event: MouseEvent) {
    event.stopPropagation()
  }

  addToCart() {
    this.store.dispatch(addToCart({ payload: this.product.id }))
  }
}
