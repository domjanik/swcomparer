import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {AppState} from './state/app/app.state';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ResourceSelectCardComponent} from './resource-select/resource-select-card/resource-select-card.component';
import {RouterModule} from '@angular/router';
import {FightBoardComponent} from './fight-board/fight-board.component';
import {ResourceSelectComponent} from './resource-select/resource-select.component';
import {ShipService} from './services/ship.service';
import {ChampionService} from './services/champion.service';
import {HttpClientModule} from '@angular/common/http';
import {ResourceCardComponent} from './fight-board/resource-card/resource-card.component';
import { ShipCardComponent } from './fight-board/resource-card/ship-card/ship-card.component';
import { ChampionCardComponent } from './fight-board/resource-card/champion-card/champion-card.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { ScoreBoardComponent } from './fight-board/score-board/score-board.component';
import { PlayerScoreComponent } from './fight-board/score-board/player-score/player-score.component';

const states = [
  AppState
];

@NgModule({
  declarations: [
    AppComponent,
    ResourceSelectCardComponent,
    FightBoardComponent,
    ResourceSelectComponent,
    ResourceCardComponent,
    ShipCardComponent,
    ChampionCardComponent,
    ScoreBoardComponent,
    PlayerScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(states),
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
  ],
  providers: [ShipService, ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
