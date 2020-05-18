import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LentaTabPage } from './lenta-tab.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from 'src/app/services/news/news.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: LentaTabPage }]),
    HttpClientModule
  ],
  declarations: [LentaTabPage],
  providers: [
    NewsService
  ]
})
export class LentaTabPagePageModule {}
