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
      name: 'cristalli di MDMA pura:',
      price: 21,
      description: 'solitamente in tonalità bianca, beige o marroncina, può essere ingerita o sciolta in acqua.',
      imageUrl: 'https://antidroga.interno.gov.it/wp-content/uploads/2019/05/Metanfetamina_0376024d0.jpg'
    },
    {
      name: 'Compresse di ecstasy',
      price: 19,
      description: 'pillole di vari colori e loghi; spesso contengono MDMA mescolata con altre sostanze .',
      imageUrl: 'https://media-assets.wired.it/photos/615da292a1d512b2960a780b/16:9/w_1280,c_limit/wired_placeholder_dummy.png'
    },
    {
      name: 'MDA',
      price: 17,
      description: 'chimicamente simile, più stimolante e meno empatica.',
      imageUrl: 'https://www.dea.gov/sites/default/files/styles/slide/public/2018-07/ecstacy-03.jpg?itok=fhCUi2hv'
    },
    {
      name: 'MDEA',
      price: 17,
      description: 'variante più sedativa e di durata minore.',
      imageUrl: 'https://antidroga.interno.gov.it/wp-content/uploads/2019/05/MDMA.jpg'
    },
    {
      name: 'PMMA / PMA',
      price: 16,
      description: 'analoghi pericolosi talvolta spacciati per ecstasy, con effetti tossici elevati.',
      imageUrl: 'https://cdn.adf.org.au/media/images/drug-macro-pf-mdma-03-930x620.width-1524.jpg'
    },
    {
      name: 'Cocaina cloridrato',
      price: 90,
      description: 'polvere bianca solubile in acqua, comunemente sniffata o disciolta per iniezione.',
      imageUrl: 'https://www.sanpatrignano.org/wp-content/uploads/2020/08/cocaina.jpg'
    },
    {
      name: 'Crack',
      price: 30,
      description: 'ottenuto riscaldando cocaina cloridrato con bicarbonato o ammoniaca; si fuma e agisce rapidamente.',
      imageUrl: 'https://www.welfarepost.it/wp-content/uploads/2025/09/gemini_generated_image_w8vtytw8vtytw8vt.webp'
    },
    {
      name: 'Pasta base / basuco',
      price: 20,
      description: 'prodotto intermedio meno raffinato, contiene residui di solventi e impurità.',
      imageUrl: 'https://www.saponificiovaresino.com/svstore/wp-content/uploads/2020/01/palmacocco-econat-soap-base.png'
    },
    {
      name: 'Freebase',
      price: 25,
      description: 'versione purificata della base libera, simile al crack ma ottenuta con etere etilico.',
      imageUrl: 'https://www.akzent-luzern.ch/pr%C3%A4vention/news/458/image-thumb__458__slideImage/crack.29b915a5.jpg'
    },
    {
      name: 'Polvere di metanfetamina',
      price: 40,
      description: 'può essere sniffata o iniettata.',
      imageUrl: 'https://media-assets.wired.it/photos/615dacbe5a8281a8f96ca4bf/16:9/w_1040,h_585,c_limit/214888_web.jpg'
    },
    {
      name: 'Crystal meth',
      price: 43,
      description: 'forma cristallina, trasparente o azzurrina, solitamente fumata; è la più potente e a lunga durata.',
      imageUrl: 'https://www.boardpreprecovery.com/wp-content/uploads/2017/09/what-is-methamphetamine-1200x600.jpeg'
    },
    {
      name: 'Yaba',
      price: 26,
      description: 'compresse diffuse nel Sud-est asiatico, miscelate con caffeina',
      imageUrl: 'https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTRkMzA2ZGMwLTRlN2UtMTFlZi05ZmFhLWFiNzg5M2FlZWVhYy5qcGc='
    },
    {
      name: 'Desoxyn',
      price: 20,
      description: 'metanfetamina legale usata in rarissimi casi come farmaco (per ADHD o obesità, sotto stretta prescrizione medica).',
      imageUrl: 'https://www.ashwoodrecovery.com/wp-content/uploads/2022/02/pills-header11.jpg'
    },
    {
      name: 'Ice / glass',
      price: 70,
      description: 'versioni ad alta purezza di crystal meth',
      imageUrl: 'https://www.heart.org/en/-/media/Images/News/2019/August-2019/0821MethCVD_SC.jpg?sc_lang=en'
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
