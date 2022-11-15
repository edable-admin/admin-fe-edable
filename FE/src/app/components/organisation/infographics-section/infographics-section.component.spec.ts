import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsSectionComponent } from './infographics-section.component';

describe('InfographicsSectionComponent', () => {
  let component: InfographicsSectionComponent;
  let fixture: ComponentFixture<InfographicsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
