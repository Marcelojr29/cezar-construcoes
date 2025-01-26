import { Component } from '@angular/core';

interface Services {
  title: string;
  description: string;
  image: string;
  delay: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Services[] = [
    {
      title: 'Projetos residenciais e comerciais em BIM',
      description: 'Projetos residenciais e comerciais avançados em BIM, garantindo eficiência e precisão em cada etapa.',
      image: 'assets/images/projetosResidenciais.png',
      delay: 100,
    },
    {
      title: 'Projetos Industriais',
      description: 'Atendemos demandas específicas com projetos industriais, desenvolvendo espaços internos, áreas de escritório e galpões industriais.',
      image: 'assets/images/projetosIndustriais.png',
      delay: 200,
    },
    {
      title: 'Projetos Complementares',
      description: 'Realizamos projetos estruturais, elétrico, hidráulico, AVCB e de climatização, todos em BIM.',
      image: 'assets/images/projetosComplementares.png',
      delay: 300,
    },
    {
      title: 'Consultoria',
      description: 'consultoria especializada em obras e projetos arquitetônicos, trazendo orientação precisa e soluções inovadoras..',
      image: 'assets/images/consultoria.png',
      delay: 400,
    },
  ];

  scrollToContact(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
