import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsGeneralDonationsComponent } from './infographics-general-donations.component';

describe('InfographicsGeneralDonationsComponent', () => {
  let component: InfographicsGeneralDonationsComponent;
  let fixture: ComponentFixture<InfographicsGeneralDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsGeneralDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsGeneralDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
