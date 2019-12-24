import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

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
}
