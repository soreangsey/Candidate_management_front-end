export interface Categorie {
  id: number;
  nom: string;
}

export interface CreateCategorie {
  nom: string;
}

export interface CategorieResponse {
  data: Categorie[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
  };
}