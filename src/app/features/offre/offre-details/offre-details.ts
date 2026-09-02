import {
  Component,
  inject,
  OnInit,
  signal
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { Offre } from '../../../models/offre.model';
import { OffreService } from '../../../services/offre/offre-service';

@Component({
  selector: 'app-offre-details',
  imports: [
    RouterLink
  ],
  templateUrl: './offre-details.html',
  styleUrl: './offre-details.css',
})
export class OffreDetails implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private offreService = inject(OffreService);

  offre = signal<Offre | null>(null);

  ngOnInit() {

    const id =
      Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.offreService.getById(id).subscribe({
      next: (res) => {
        this.offre.set(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}