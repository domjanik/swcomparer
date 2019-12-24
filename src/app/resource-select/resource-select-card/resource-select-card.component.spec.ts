import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResourceSelectCardComponent} from './resource-select-card.component';

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
    component.title = 'test';
    component.image = 'testImg.png';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "test"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-title').textContent).toContain('test');
  });

  it('should have img address "/assets/testImg.png"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('/assets/testImg.png');
  });
});
