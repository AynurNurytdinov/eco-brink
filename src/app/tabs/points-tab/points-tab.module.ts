import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PointsTabPage } from './points-tab.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { PointsListPage } from './points-list/points-list.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([
      { path: '', component: PointsTabPage },
      { path: 'list', component: PointsListPage }
    ])
  ],
  declarations: [
    PointsTabPage,
    PointsListPage
  ]
})
export class PointsTabPageModule {}
