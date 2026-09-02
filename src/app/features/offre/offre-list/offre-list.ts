import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Offre } from '../../../models/offre.model';
import { OffreService } from '../../../services/offre/offre-service';
import { OffreItem } from '../offre-item/offre-item';

@Component({
  selector: 'app-offre-list',
  imports: [OffreItem],
  templateUrl: './offre-list.html',
  styleUrl: './offre-list.css',
})
export class OffreList implements OnInit {

  private offreService = inject(OffreService);
  private router = inject(Router);

  offres = signal<Offre[]>([]);

  ngOnInit(): void {
    this.offreService.getAll().subscribe({
      next: (res) => this.offres.set(res.data),
      error: (err) => console.log(err)
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/offre', 'details', id]);
  }

  goToAdd(): void {
    this.router.navigate(['/offre', 'add']);
  }
}