import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Cezar Duque',
      role: 'Mestre de Obras',
      description:
        'Especialista em BIM, com vasta experiência em projetos residenciais e industriais.',
      photo: 'assets/images/Cezar.png',
    },
    {
      name: 'Charlie Duque',
      role: 'Eletricista',
      description:
        'Especialista em instalações elétricas e análise topográfica para projetos de grande porte.',
      photo: 'assets/images/Charlie.png',
    },
    {
      name: 'Rodrigo Cassiano',
      role: 'Arquiteto',
      description:
        'Com foco em design sustentável, Rodrigo transforma ideias em projetos inovadores.',
      photo: 'assets/images/Rodrigo.png',
    },
  ];
}
