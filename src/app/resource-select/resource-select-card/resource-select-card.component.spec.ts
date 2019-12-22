import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResourceSelectCardComponent} from './resource-card.component';

describe('ResourceCardComponent', () => {
  let component: ResourceSelectCardComponent;
  let fixture: ComponentFixture<ResourceSelectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceSelectCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSelectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
