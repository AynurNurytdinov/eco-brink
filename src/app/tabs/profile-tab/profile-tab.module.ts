import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabPage } from './profile-tab.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { NotificationsPage } from './notifications/notifications.page';
import { SettingsPage } from './settings/settings.page';
import { StatsPage } from './stats/stats.page';
import { AchievementsPage } from './achievements/achievements.page';
import { PurchasesPage } from './purchases/purchases.page';
import { ShopPage } from './shop/shop.page';
import { ShopService } from 'src/app/services/shop/shop.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterModalPage } from './stats/filter-modal/filter-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([
      { path: '', component: ProfileTabPage },
      { path: 'notifications', component: NotificationsPage },
      { path: 'settings', component: SettingsPage },
      { path: 'stats', component: StatsPage },
      { path: 'achievements', component: AchievementsPage },
      { path: 'purchases', component: PurchasesPage },
      { path: 'shop', component: ShopPage },
    ]),
    HttpClientModule
  ],
  declarations: [
    ProfileTabPage,
    NotificationsPage,
    SettingsPage,
    StatsPage,
    AchievementsPage,
    PurchasesPage,
    ShopPage,
    FilterModalPage
  ],
  providers: [
    ShopService
  ],
  entryComponents: [
    FilterModalPage
  ]
})
export class ProfileTabPageModule {}
