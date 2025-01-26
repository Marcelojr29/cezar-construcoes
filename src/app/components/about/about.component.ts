import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  values = [
    {
      icon: 'assets/icons/missão.png',
      title: 'Missão',
      description: 'Oferecer soluções inovadoras e sustentáveis para projetos de construção.',
    },
    {
      icon: 'assets/icons/visão.png',
      title: 'Visão',
      description: 'Ser referência no mercado, reconhecida por qualidade e confiabilidade.',
    },
    {
      icon: 'assets/icons/valor.png',
      title: 'Valores',
      description: 'Ética, excelência e compromisso com a satisfação do cliente.',
    },
  ];

  scrollToContact(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
