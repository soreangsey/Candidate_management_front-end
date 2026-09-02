import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { OffreService } from '../../../services/offre/offre-service';
import { CategorieService } from '../../../services/categorie/categorie-service';
import { CreateOffre } from '../../../models/offre.model';
import { Categorie } from '../../../models/categorie.model';

@Component({
  selector: 'app-offre-form',
  imports: [ReactiveFormsModule],
  templateUrl: './offre-form.html',
  styleUrl: './offre-form.css',
})
export class OffreForm implements OnInit {

  private fb = inject(FormBuilder);
  private offreService = inject(OffreService);
  private categorieService = inject(CategorieService);
  private router = inject(Router);

  categories = signal<Categorie[]>([]);
  offreForm: FormGroup;

  constructor() {
    this.offreForm = this.fb.group({
      titre: ['', Validators.required],
      entreprise: ['', Validators.required],
      description: [''],
      lieu: [''],
      date_publication: [''],
      id_categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe({
      next: (res) => this.categories.set(res.data),
      error: (err) => console.log(err)
    });
  }

  addOffre() {
  if (this.offreForm.invalid) {
    this.offreForm.markAllAsTouched();
    return;
  }

  const offre = this.offreForm.value as CreateOffre;

  this.offreService.addOffre(offre).subscribe({
    next: () => this.router.navigate(['/offre']),
    error: (err) => console.log(err)
  });
}
}