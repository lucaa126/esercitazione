import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // Input: riceve elenco prodotti da prodotti
  @Input() products: Product[] = [];

  // Output: evento di selezione prodotto
  @Output() selectProduct = new EventEmitter<Product>();

  // Output: evento di eliminazione prodotto
  @Output() deleteProduct = new EventEmitter<number>();

  // Output: evento aggiunta prodotto
  @Output() addProduct = new EventEmitter<Product>();

  // varibile controllo aggiunta prodotto
  showAddForm = false;

  // variabile per la ricerca
  searchTerm = '';

  // memorizzazione dati prodotto in aggiunta
  newName = '';
  newPrice: number = 0;
  newDescription = '';
  newImageUrl = '';

  // get per avevere i risultati di ricerca
  get filteredProducts(): Product[] {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // show aggiunta prodotto
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  // metodo di aggiunta prodotto
  submitForm() {
    // tutti i campi devono essere riempiti e il prezzo deve essere positivo
    if (!this.newName || this.newPrice <= 0 || !this.newDescription || !this.newImageUrl) return;

    // evento verso prodotti per aggiungere il nuovo prodotto
    this.addProduct.emit({
      name: this.newName,
      price: this.newPrice,
      description: this.newDescription,
      imageUrl: this.newImageUrl
    });

    // azzeramento campi
    this.newName = '';
    this.newPrice = 0;
    this.newDescription = '';
    this.newImageUrl = '';
    this.showAddForm = false;  // chiusura form
  }
}
