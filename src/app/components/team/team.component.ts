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
        'Especialista em BIM, possui experiência em projetos residenciais e industriais.',
      photo: 'assets/images/Cezar.png',
    },
    {
      name: 'Charlie Duque',
      role: 'Eletricista',
      description:
        'Com experiência em construções e especialista em levantamento e análise topográfica.',
      photo: 'assets/images/Charlie.png',
    },
    {
      name: 'Rodrigo Cassiano',
      role: 'Arquiteto',
      description:
        'Arquiteto experiente em design de interiores e planejamento urbano, com foco em sustentabilidade e inovação.',
      photo: 'assets/images/Rodrigo.png',
    },
  ];
}
