import {AppStateModel} from '../models/AppStateModel';

export const appInit: AppStateModel = {
  menuOpened: false,
  currentWinner: '',
  resourceType: '',
  player1: {
    winCounter: 0,
    winStreak: 0,
    loading: false,
    currentResource: null
  },
  player2: {
    winCounter: 0,
    winStreak: 0,
    loading: false,
    currentResource: null
  }
};
