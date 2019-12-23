import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResourceCardComponent} from './resource-card.component';
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';


@Component({
  selector: 'app-ship-card',
  template: '<ng-content></ng-content>'
})
class MockShipCardComponent {
  @Input() data: any;
}


@Component({
  selector: 'app-champion-card',
  template: '<ng-content></ng-content>'
})
class MockChampionCardComponent {
  @Input() data: any;
}


describe('ResourceCardComponent', () => {
  let component: ResourceCardComponent;
  let fixture: ComponentFixture<ResourceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceCardComponent, MockShipCardComponent, MockChampionCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
