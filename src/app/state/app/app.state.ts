import {Action, State, StateContext, Store} from '@ngxs/store';
import {
  AddPlayer1WinAction,
  AddPlayer2WinAction,
  CalculateResultAction,
  GetRandomChampionPairAction,
  GetRandomShipPairAction
} from './app.actions';
import {ShipService} from '../../services/ship.service';
import {ChampionService} from '../../services/champion.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {combineLatest, Observable, Observer} from 'rxjs';
import {appInit} from './inits/app.init';
import {AppStateModel} from './models/AppStateModel';
import {ResourceListDTO} from './models/ResourceListDTO';
import {ResourceShip} from './models/ResourceShip';
import {ResourceChampions} from './models/ResourceChampions';

@State<AppStateModel>({
  name: 'app',
  defaults: appInit
})
export class AppState {
  constructor(private store: Store, private shipService: ShipService, private championService: ChampionService) {
  }

  getRandomChampion(data) {
    const pageSize = data.results.length;
    const playerChampion = Math.floor(Math.random() * data.count);
    const playerPageNr = Math.ceil(playerChampion / pageSize);
    const pageId = playerChampion - ((playerPageNr - 1) * pageSize) - 1;

    if (playerPageNr > 1) {
      return this.championService.getChampionList(playerPageNr).pipe(map((result) => {
        return result.results[pageId];
      }));
    } else {
      return new Observable((observer: Observer<any>) => {
        observer.next(data.results[pageId]);
        observer.complete();
      });
    }
  }

  getRandomShip(data) {
    const pageSize = data.results.length;
    const playerShip = Math.floor(Math.random() * data.count);
    const playerPageNr = Math.ceil(playerShip / pageSize);
    const pageId = playerShip - ((playerPageNr - 1) * pageSize) - 1;

    if (playerPageNr > 1) {
      return this.shipService.getShipList(playerPageNr).pipe(map((result) => {
        return result.results[pageId];
      }));
    } else {
      return new Observable((observer: Observer<any>) => {
        observer.next(data.results[pageId]);
        observer.complete();
      });
    }
  }

  @Action(GetRandomShipPairAction)
  getRandomShipPair(ctx: StateContext<AppStateModel>, action: GetRandomShipPairAction) {
    const state = ctx.getState();
    ctx.patchState({
      player1: {
        ...state.player1,
        loading: true,
      },
      player2: {
        ...state.player2,
        loading: true
      }
    });
    this.shipService.getShipList(1).pipe(switchMap((data: ResourceListDTO) => {
      const obs: Observable<any>[] = [];
      const player1Data = this.getRandomShip(data);
      const player2Data = this.getRandomShip(data);
      obs.push(player1Data);
      obs.push(player2Data);
      return combineLatest(obs);
    })).subscribe((result) => {
      const currentState = ctx.getState();
      ctx.patchState({
        resourceType: 'ship',
        player1: {
          ...currentState.player1,
          loading: false,
          currentResource: result[0]
        },
        player2: {
          ...currentState.player2,
          loading: false,
          currentResource: result[1]
        }
      });
      ctx.dispatch(new CalculateResultAction());
    });
  }

  @Action(GetRandomChampionPairAction)
  getRandomChampionPair(ctx: StateContext<AppStateModel>, action: GetRandomChampionPairAction) {
    const state = ctx.getState();
    ctx.patchState({
      player1: {
        ...state.player1,
        loading: true,
      },
      player2: {
        ...state.player2,
        loading: true
      }
    });
    this.championService.getChampionList(1).pipe(switchMap((data: ResourceListDTO) => {
      const obs: Observable<any>[] = [];
      const player1Data = this.getRandomChampion(data);
      const player2Data = this.getRandomChampion(data);
      obs.push(player1Data);
      obs.push(player2Data);
      return combineLatest(obs);
    })).subscribe((result) => {
      const currentState = ctx.getState();
      ctx.patchState({
        resourceType: 'champion',
        player1: {
          ...currentState.player1,
          loading: false,
          currentResource: result[0]
        },
        player2: {
          ...currentState.player2,
          loading: false,
          currentResource: result[1]
        }
      });
      ctx.dispatch(new CalculateResultAction());
    });
  }

  @Action(CalculateResultAction)
  calculateResult(ctx: StateContext<AppStateModel>, action: CalculateResultAction) {
    const state = ctx.getState();
    let winner: string;
    if (state.player1.currentResource && state.player2.currentResource) {
      if (state.resourceType === 'ship') {
        if (Number((state.player1.currentResource as ResourceShip).crew) > Number((state.player2.currentResource as ResourceShip).crew)) {
          winner = 'p1';
          // tslint:disable-next-line:max-line-length
        } else if (Number((state.player1.currentResource as ResourceShip).crew) < Number((state.player2.currentResource as ResourceShip).crew)) {
          winner = 'p2';
        } else {
          winner = 'draw';
        }
      } else if (state.resourceType === 'champion') {
        // tslint:disable-next-line:max-line-length
        if (Number((state.player1.currentResource as ResourceChampions).mass) > Number((state.player2.currentResource as ResourceChampions).mass)) {
          winner = 'p1';
          // tslint:disable-next-line:max-line-length
        } else if (Number((state.player1.currentResource as ResourceChampions).mass) < Number((state.player2.currentResource as ResourceChampions).mass)) {
          winner = 'p2';
        } else {
          winner = 'draw';
        }
      }
    }
    if (winner === 'p1') {
      ctx.dispatch(new AddPlayer1WinAction());
    } else if (winner === 'p2') {
      ctx.dispatch(new AddPlayer2WinAction());
    }
    ctx.patchState({
      currentWinner: winner
    });
  }

  @Action(AddPlayer2WinAction)
  addPlayer2Win(ctx: StateContext<AppStateModel>, action: AddPlayer2WinAction) {
    const state = ctx.getState();
    let p1WinStreak = state.player1.winStreak;
    const p2WinStreak = state.player2.winStreak + 1;
    if (p1WinStreak) {
      p1WinStreak = 0;
    }
    ctx.patchState({
      player1: {
        ...state.player1,
        winStreak: p1WinStreak
      },
      player2: {
        ...state.player2,
        winStreak: p2WinStreak,
        winCounter: state.player2.winCounter + 1
      }
    });
  }

  @Action(AddPlayer1WinAction)
  addPlayer1Win(ctx: StateContext<AppStateModel>, action: AddPlayer1WinAction) {
    const state = ctx.getState();
    const p1WinStreak = state.player1.winStreak + 1;
    let p2WinStreak = state.player2.winStreak;
    if (p2WinStreak) {
      p2WinStreak = 0;
    }
    ctx.patchState({
      player1: {
        ...state.player1,
        winStreak: p1WinStreak,
        winCounter: state.player1.winCounter + 1
      },
      player2: {
        ...state.player2,
        winStreak: p2WinStreak
      }
    });
  }
}
