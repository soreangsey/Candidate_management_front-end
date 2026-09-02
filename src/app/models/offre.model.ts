import {CategorieReference} from './categorie.model'
export interface Offre {
  id: number;
  titre: string;
  entreprise: string;
  description: string;
  lieu: string;
  date_publication: Date;
  categorie?: CategorieReference;
}

export interface CreateOffre {
  titre: string;
  entreprise: string;
  description: string;
  lieu: string;
  date_publication: Date;
  id_categorie: number;
}