import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsSectionMobileComponent } from './infographics-section-mobile.component';

describe('InfographicsSectionMobileComponent', () => {
  let component: InfographicsSectionMobileComponent;
  let fixture: ComponentFixture<InfographicsSectionMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsSectionMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsSectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
