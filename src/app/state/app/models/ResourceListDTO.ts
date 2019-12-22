import {PlayerResource} from './PlayerResource';

export class ResourceListDTO {
  count: number;
  next: string;
  previous: string;
  results: PlayerResource[];
}
