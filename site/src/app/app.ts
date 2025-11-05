import { Component, OnInit, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Body } from './body/body';

@Component({
  selector: 'app-root',
  // componente standalone per poter usare 'imports' nel decorator
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,Body],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('site');

  // pubblico così il template può leggerlo con *ngIf="showStaticSections"
  showStaticSections = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // impostazione iniziale
    this.updateVisibility(this.router.url);

    // aggiorna su ogni navigazione completa
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateVisibility(event.urlAfterRedirects);
      });
  }

  private updateVisibility(url: string) {
    // nascondi le sezioni statiche su /pagina1 e /pagina2
    const hideOn = ['/pagina1', '/pagina2'];
    const path = (url || '').split('?')[0].split('#')[0];
    this.showStaticSections = !hideOn.includes(path);
  }

  openMenu(): void {
    const nav = document.querySelector('nav') as HTMLElement | null;
    if (nav) {
      nav.classList.toggle('open');
    }
  }
  
}
