import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {TestAction} from '../state/app/app.actions';

@Component({
  selector: 'app-resource-select',
  templateUrl: './resource-select.component.html',
  styleUrls: ['./resource-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceSelectComponent implements OnInit {

  constructor(public store: Store) {
  }

  ngOnInit() {
  }

  clicked() {
    this.store.dispatch(new TestAction());
  }
}
