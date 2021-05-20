import { IStep } from "../interfaces/step.interface";

export const stepsData: IStep[] = [
  {
    description: 'Grave sua voz',
    order: 1,
    timeToFinish: (0.5 * 60),
  },
  {
    description: 'Escute o áudio',
    order: 2,
    timeToFinish: (15 * 60),
  },
  {
    description: 'Repetir frase junto com o narrador',
    order: 3,
    timeToFinish: (7 * 60),
  },
  {
    description: 'Repetir frase após o narrador',
    order: 4,
    timeToFinish: (3 * 60),
  },
  {
    description: 'Grave sua voz novamente',
    order: 5,
    timeToFinish: (0.5 * 60),
  },
];