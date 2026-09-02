import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffreComponent } from './offre-component';

describe('OffreComponent', () => {
  let component: OffreComponent;
  let fixture: ComponentFixture<OffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OffreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
