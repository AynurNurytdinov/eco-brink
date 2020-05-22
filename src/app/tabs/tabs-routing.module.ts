import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lenta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./lenta-tab/lenta-tab.module').then(m => m.LentaTabPagePageModule)
          }
        ]
      },
      {
        path: 'apps',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./apps-tab/apps-tab.module').then(m => m.AppsTabPageModule)
          }
        ]
      },
      {
        path: 'points',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./points-tab/points-tab.module').then(m => m.PointsTabPageModule)
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./services/services.module').then(m => m.ServicesPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./profile-tab/profile-tab.module').then(m => m.ProfileTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/lenta',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/lenta',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
