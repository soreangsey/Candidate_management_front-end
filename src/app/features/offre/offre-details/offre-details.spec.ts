import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffreDetails } from './offre-details';

describe('OffreDetails', () => {
  let component: OffreDetails;
  let fixture: ComponentFixture<OffreDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(OffreDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
