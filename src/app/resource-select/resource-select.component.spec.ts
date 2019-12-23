import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResourceSelectComponent} from './resource-select.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {Store} from '@ngxs/store';


describe('ResourceSelectComponent', () => {
  let component: ResourceSelectComponent;
  let fixture: ComponentFixture<ResourceSelectComponent>;
  let store: Store;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj<Store>(['dispatch', 'selectSnapshot'] as any);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ResourceSelectComponent],
      providers: [{provide: Store, useValue: storeSpy}],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
