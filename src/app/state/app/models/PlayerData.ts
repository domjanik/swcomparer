import {ResourceChampions} from './ResourceChampions';
import {ResourceShip} from './ResourceShip';

export class PlayerData {
  winStreak: number;
  winCounter: number;
  loading: boolean;
  currentResource: ResourceChampions | ResourceShip;
}
