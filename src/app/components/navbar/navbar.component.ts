import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.querySelector('.navbar-menu');
    const toggle = document.querySelector('.menu-toggle');
    if (menu && toggle) {
      menu.classList.toggle('active', this.isMenuOpen);
      toggle.classList.toggle('active', this.isMenuOpen);
    }
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}
