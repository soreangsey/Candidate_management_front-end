import { Offre } from "./offre.model"

export interface OffreResponse {
    data : Offre[];
    meta:{
        page:number,
        limit:number,
        total:number,
        totalPages:number,
        hasPrevious:boolean,
        hasNext:boolean
    }
}