import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographItemsDonationsComponent } from './infograph-org-items-donations.component';

describe('InfographItemsDonationsComponent', () => {
  let component: InfographItemsDonationsComponent;
  let fixture: ComponentFixture<InfographItemsDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographItemsDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographItemsDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
