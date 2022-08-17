import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEnvironmentComponent } from './display-environment.component';

describe('DisplayEnvironmentComponent', () => {
  let component: DisplayEnvironmentComponent;
  let fixture: ComponentFixture<DisplayEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
