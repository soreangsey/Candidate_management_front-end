import { Component, input, output } from '@angular/core';

import { Offre } from '../../../models/offre.model';

@Component({
  selector: 'app-offre-item',
  imports: [],
  templateUrl: './offre-item.html',
  styleUrl: './offre-item.css',
})
export class OffreItem {

  offre = input.required<Offre>();

  details = output<number>();

  showDetails() {
    this.details.emit(this.offre().id);
  }
}

