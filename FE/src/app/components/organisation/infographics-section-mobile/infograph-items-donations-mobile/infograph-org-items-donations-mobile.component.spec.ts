import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographItemsDonationsMobileComponent } from './infograph-org-items-donations-mobile.component';

describe('InfographItemsDonationsMobileComponent', () => {
  let component: InfographItemsDonationsMobileComponent;
  let fixture: ComponentFixture<InfographItemsDonationsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographItemsDonationsMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographItemsDonationsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
