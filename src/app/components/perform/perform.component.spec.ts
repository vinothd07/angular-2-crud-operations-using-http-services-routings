import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformComponent } from './perform.component';

describe('PerformComponent', () => {
  let component: PerformComponent;
  let fixture: ComponentFixture<PerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
