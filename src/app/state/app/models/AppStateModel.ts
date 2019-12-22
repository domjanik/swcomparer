import {PlayerData} from './PlayerData';

export class AppStateModel {
  public menuOpened: boolean;
  public currentWinner: string;
  public resourceType: string;
  player1: PlayerData;
  player2: PlayerData;
}
