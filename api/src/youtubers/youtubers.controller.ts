import { Controller, Get, Param } from '@nestjs/common';
import { PersonType } from 'src/interfaces/person.type';

@Controller('youtubers')
export class YoutubersController {
  @Get(':id')
  findAll(@Param() params): PersonType {
    const dataSet: PersonType[] = [
      {
        name: 'Leifer Mendez',
        avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4',
        tag: ['angular', 'typescript','node','mongo','frontend','backend'],
        video: 'https://www.youtube.com/watch?v=3-UEU__pUU0',
        description: 'Me apasionan las tecnologías web, también creo contenido en Youtube me encantan los proyectos retadores y aportar conocimiento a la comunidad.',
        id: 'leifer',
      },
      {
        name: 'Nicolas-Schurmann',
        avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4',
        tag: ['angular', 'typescript','node','mongo','frontend','backend'],
        video: 'https://www.youtube.com/watch?v=OOMCoK5Jb_g',
        description: 'Me apasionan las tecnologías web, también creo contenido en Youtube me encantan los proyectos retadores y aportar conocimiento a la comunidad.',
        id: 'hola-mundo',
      },
    ];

    const person = dataSet.find((p) => p.id === params.id)

    return person;
  }
}
