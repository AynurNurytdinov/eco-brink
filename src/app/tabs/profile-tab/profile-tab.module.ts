import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabPage } from './profile-tab.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { NotificationsPage } from './notifications/notifications.page';
import { SettingsPage } from './settings/settings.page';

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
    ])
  ],
  declarations: [
    ProfileTabPage,
    NotificationsPage,
    SettingsPage
  ]
})
export class ProfileTabPageModule {}
