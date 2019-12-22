import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {Select, Store} from '@ngxs/store';
import {GetRandomChampionPairAction, GetRandomShipPairAction} from '../state/app/app.actions';
import {Observable} from 'rxjs';
import {PlayerData} from '../state/app/models/PlayerData';

@Component({
  selector: 'app-fight-board',
  templateUrl: './fight-board.component.html',
  styleUrls: ['./fight-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate(300, style({opacity: 0}))
      ])
    ])
  ]
})
export class FightBoardComponent implements OnInit {
  @Select('app.player1') player1: Observable<PlayerData>;
  @Select('app.player2') player2: Observable<PlayerData>;
  @Select('app.currentWinner') winner: Observable<string>;
  @Select('app.resourceType') type: Observable<string>;

  loadingText: string = '';
  hideLoadingText: boolean = false;

  championsLoadingTexts = [
    'Checking out local tavern for champions...',
    'Looking on Linkedin for new recruits...',
    'Buying more clones...',
    'Checking marketplaces for new slaves...',
    'Asking Jabba the Hutt for new pilots...',
  ];
  shipLoadingTexts = [
    'Searching for ships on online auctions...',
    'Reparing old ship at local self-styled mechanic...',
    'Waiting for Anakin Skywalker to construct new ships...',
    'Playing Corellian Spike on Numidian Prime...',
    'Crowdfounding new ships...'
  ];

  constructor(public activeRoute: ActivatedRoute, public store: Store, public cdr: ChangeDetectorRef) {
    this.activeRoute.params.pipe(first()).subscribe((params) => {
      const optionId = Math.floor(Math.random() * (5 - 1) + 1);
      if (params.type === 'ships') {
        this.loadingText = this.shipLoadingTexts[optionId];
        this.store.dispatch(new GetRandomShipPairAction());
      } else if (params.type === 'champions') {
        this.loadingText = this.championsLoadingTexts[optionId];
        this.store.dispatch(new GetRandomChampionPairAction());
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.cdr.markForCheck();
      this.hideLoadingText = true;
    }, 2000);
  }

  tryAgain() {
    this.type.pipe(first()).subscribe((type) => {
      const optionId = Math.floor(Math.random() * (5 - 1) + 1);
      if (type === 'ship') {
        this.loadingText = this.shipLoadingTexts[optionId];
        this.store.dispatch(new GetRandomShipPairAction());
      } else if (type === 'champion') {
        this.loadingText = this.championsLoadingTexts[optionId];
        this.store.dispatch(new GetRandomChampionPairAction());
      }
    });
  }
}
