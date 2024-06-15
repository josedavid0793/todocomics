import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuMobile: boolean = false;

  toggleMenu(event: MouseEvent) {
    this.menuMobile = !this.menuMobile;
    event.stopPropagation(); // Para evitar que el evento se propague al hacer clic
  }
}
