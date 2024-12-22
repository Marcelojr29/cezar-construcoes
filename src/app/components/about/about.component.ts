import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  values = [
    {
      icon: 'assets/icons/mission.svg',
      title: 'Missão',
      description: 'Oferecer soluções inovadoras e sustentáveis para projetos de construção.',
    },
    {
      icon: 'assets/icons/vision.svg',
      title: 'Visão',
      description: 'Ser referência no mercado, reconhecida por qualidade e confiabilidade.',
    },
    {
      icon: 'assets/icons/values.svg',
      title: 'Valores',
      description: 'Ética, excelência e compromisso com a satisfação do cliente.',
    },
  ];

  scrollToContact(sectionId: string) {
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
