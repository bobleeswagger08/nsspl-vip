import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { ListOfficeComponent } from './components/list-office/list-office.component';
import { OfficeComponent } from './components/office/office.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/listoffice',
    pathMatch: 'full',
  },
  {
      path: 'listoffice',
      component: ListOfficeComponent,
  },
  {
    path: '',
    redirectTo: '/office',
    pathMatch: 'full',
  },
  {
      path: 'office',
      component: OfficeComponent,
  },
];
