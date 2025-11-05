import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-pagina1',
  imports: [CommonModule, ProductList, ProductDetail],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.css',
})
export class Pagina1 {
  products: Product[] = [
    {
      name: 'CERCHI LED',
      price: 100,
      description: 'DEC-TEC LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-25.jpg'
    },
    {
      name: 'DISEGNI A LED',
      price: 150,
      description: 'DEC-TEC LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-26.jpg'
    },
    {
      name: 'DIVA',
      price: 100,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-1.jpg'
    },
    {
      name: 'EGGS',
      price: 150,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-14.jpg'
    },
    {
      name: 'FOCUS',
      price: 200,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-12.jpg'
    },
    {
      name: 'HALO',
      price: 200,
      description: 'DEC-TEC LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-29.jpg'
    },
    {
      name: 'HUNTER',
      price: 300,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-20.jpg'
    },
    {
      name: 'KUBIK',
      price: 150,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-17.jpg'
    },
    {
      name: 'LEDWOODS',
      price: 300,
      description: 'DEC-TEC LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-28.jpg'
    },
    {
      name: 'LED_0 TRACKLIGHT',
      price: 150,
      description: 'RETAIL LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-21.jpg'
    },
    {
      name: 'LED_O 220V',
      price: 150,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-23.jpg'
    },
    {
      name: 'LED_O WALL WASHER',
      price: 150,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-22.jpg'
    },
    {
      name: 'LINDA',
      price: 150,
      description: 'DEC-TEC LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-27.jpg'
    },
    {
      name: 'LINEA LENS',
      price: 350,
      description: 'ARCHITECTURAL LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-5.jpg'
    },
    {
      name: 'LINEE LED',
      price: 250,
      description: 'ARCHITECTURAL LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-6.jpg'
    },
    {
      name: 'LOIS',
      price: 250,
      description: 'ARCHITECTURAL LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-10.jpg'
    },
    {
      name: 'LOTO',
      price: 150,
      description: 'ARCHITECTURAL LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-9.jpg'
    },
    {
      name: 'LUDO',
      price: 300,
      description: 'ARCHITECTURAL LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-7.jpg'
    },
    {
      name: 'MICRO',
      price: 100,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-16.jpg'
    },
    {
      name: 'ONEFORALL',
      price: 200,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-15.jpg'
    },
    {
      name: 'OTLY+DONNA',
      price: 50,
      description: 'DEC-TEC LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-30.jpg'
    },
    {
      name: 'PRISMILED',
      price: 350,
      description: 'DEC-TEC LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-24.jpg'
    },
    {
      name: 'R_LINE',
      price: 130,
      description: 'ARCHITECTURAL LIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-11.jpg'
    },
    {
      name: 'TIN LED OPAL',
      price: 100,
      description: 'DOWNLIGHTING',
      imageUrl: 'https://www.wiredledlight.com/wired/images/family/family-19.jpg'
    },
    
  ];

  // Variabile per prodotto selezionato
  // null = nessun prodotto selezionato
  selectedProduct: Product | null = null;

  // selezione prodotto da lista
  // selectedProduct = prodotto selezionato
  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }

  // eliminazione prodotto da lista
  // index = posizione prodotto da rimuovere
  onDeleteProduct(index: number) {
    // Rimuove prodotto da products
    this.products.splice(index, 1);

    // controllo se prodotto eliminato
    // azzera i dettagli del prodotto eliminato
    if (this.selectedProduct && !this.products.includes(this.selectedProduct)) {
      this.selectedProduct = null;
    }
  }

  // aggiunta prodotto lista
  onAddProduct(product: Product) {
    this.products.push(product); // aggiunta prodotto a products
  }

  // chiusura form dettagli
  onCloseDetail() {
    this.selectedProduct = null; // Annulla selezione prodotto
  }

}
