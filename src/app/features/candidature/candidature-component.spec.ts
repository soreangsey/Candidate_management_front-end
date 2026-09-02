import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidatureComponent } from './candidature-component';

describe('CandidatureComponent', () => {
  let component: CandidatureComponent;
  let fixture: ComponentFixture<CandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidatureComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
