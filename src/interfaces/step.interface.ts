export interface IStep {
  description: string;
  order: number;
  timeToFinish: number;
  hasFinished?: boolean;
}