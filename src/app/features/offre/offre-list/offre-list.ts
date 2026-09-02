import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Offre } from '../../../models/offre.model';
import { OffreService } from '../../../services/offre/offre-service';
import { OffreItem } from '../../offre/offre-item/offre-item'

@Component({
  selector: 'app-offre-list',
  imports: [
    OffreItem
  ],
  templateUrl: './offre-list.html',
  styleUrl: './offre-list.css',
})
export class OffreList implements OnInit {

  private offreService = inject(OffreService);
  private router = inject(Router);

  offres = signal<Offre[]>([]);

  ngOnInit():void {
    
    this.offreService.getAll().subscribe({
      next: (res) => {
        this.offres.set(res.data);
        console.log(res);
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goToDetails(id: number) {
    this.router.navigate([
      '/offre',
      'details',
      id
    ]);
  }

    goToAdd() {
    this.router.navigate([
      '/offres',
      'add'
    ]);
  }
}