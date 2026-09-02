import { Routes } from '@angular/router';
import { RegisterComponent } from './features/register-component/register-component';

import { OffreComponent } from './features/offre/offre-component';
import { OffreList }  from './features/offre/offre-list/offre-list';
import { OffreDetails } from './features/offre/offre-details/offre-details';
import { OffreForm } from './features/offre/offre-form/offre-form';



export const routes: Routes = [
  {
    title:'Register',
    path: 'register',
    component: RegisterComponent
  },
  // offre

  {
    path: 'offre',
    component: OffreComponent,
    children: [

      {
        path: '',
        component: OffreList
      },
       {
        path: 'add',
        component: OffreForm,
      },

      {
        path: 'list',
        component: OffreList,
      },

      {
        path: 'details/:id',
        component: OffreDetails,
      }

    ]
  },


  {
    path: '**',
    redirectTo: ''
  }

];