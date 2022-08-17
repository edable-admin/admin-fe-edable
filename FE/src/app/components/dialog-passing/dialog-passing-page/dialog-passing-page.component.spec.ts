import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPassingPageComponent } from './dialog-passing-page.component';

describe('DialogPassingPageComponent', () => {
  let component: DialogPassingPageComponent;
  let fixture: ComponentFixture<DialogPassingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPassingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPassingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
