import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FightBoardComponent} from './fight-board/fight-board.component';
import {ResourceSelectComponent} from './resource-select/resource-select.component';

const routes: Routes = [
  {path: 'home', component: ResourceSelectComponent},
  {path: 'fight/:type', component: FightBoardComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
