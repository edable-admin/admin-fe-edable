import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallsComponent } from './api-calls.component';

describe('ApiCallsComponent', () => {
  let component: ApiCallsComponent;
  let fixture: ComponentFixture<ApiCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
