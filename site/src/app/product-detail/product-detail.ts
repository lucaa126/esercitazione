import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
   // Input: ricezione prodotti
  @Input() product: Product | null = null;

  // Output: chiusura dettagli
  @Output() close = new EventEmitter<void>();

  // copia utilizzabile per modifica
  editedProduct: Product | null = null;

  isEditing = false;

  // funzione per modifica
  ngOnChanges() {
    // rea una copia per l'editing
    this.editedProduct = this.product ? { ...this.product } : null;
    this.isEditing = false; 
  }

  // att mod prodotto
  edit() {
    this.isEditing = true;
  }

  // salvataggio modifiche sui prodotti
  save() {
    // controllo su prodotti
    if (this.editedProduct && this.product) {
      // Copia valori oggetto modificato dentro prodotto originale
      Object.assign(this.product, this.editedProduct);
      this.isEditing = false; // Esce dalla modifica
    }
  }

  // chiusura dettagli prodotto
  cancel() {
    this.close.emit(); 
  }

}
