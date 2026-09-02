import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { OffreService }  from '../../../services/offre/offre-service';
import { CreateOffre } from '../../../models/offre.model';

@Component({
  selector: 'app-offre-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './offre-form.html',
  styleUrl: './offre-form.css',
})
export class OffreForm {

  private fb = inject(FormBuilder);
  private offreService = inject(OffreService);
  private router = inject(Router);

  offreForm: FormGroup;


  constructor() {

    offreForm = this.fb.group({
        titre: ['', Validators.required],
        entreprise: ['', Validators.required],
        description: [''],
        lieu: [''],
        date_publication: [''],
        id_categorie: ['', Validators.required]
      });

  }


  addOffre() {
  if (this.offreForm.invalid) {
    this.offreForm.markAllAsTouched();
    return;
  }

  const offre = this.offreForm.value as CreateOffre;

  this.offreService.create(offre).subscribe();
}
}