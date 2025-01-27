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
      description: 'Transformar sonhos em realidade com soluções inovadoras, sustentáveis e de qualidade na construção civil.',
    },
    {
      icon: 'assets/icons/visão.png',
      title: 'Visão',
      description: 'Ser referência em construção civil, reconhecida pela excelência, inovação e impacto positivo na sociedade.',
    },
    {
      icon: 'assets/icons/valor.png',
      title: 'Valores',
      description: 'Agimos com ética, transparência, respeito e compromisso, priorizando qualidade, inovação e sustentabilidade.',
    },
  ];

  scrollToContact(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
