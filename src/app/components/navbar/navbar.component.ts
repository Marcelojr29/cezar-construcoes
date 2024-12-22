import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
