import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers = [
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
  ];
}
