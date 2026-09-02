import { Categorie } from './categorie.model';

export interface Offre {
  id: number;
  titre: string;
  entreprise: string;
  description: string;
  lieu: string;
  date_publication: string;
  id_categorie: number;
  categorie?: Categorie;
}

export interface CreateOffre {
  titre: string;
  entreprise: string;
  description: string;
  lieu: string;
  date_publication: string;
  id_categorie: number;
}

export interface OffreResponse {
  data: Offre[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
  };
}