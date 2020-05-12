import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppsTabPage } from './apps-tab.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { InfoPage } from './info/info.page';
import { DoingPage } from './doing/doing.page';
import { TestsPage } from './tests/tests.page';
import { EventsPage } from './events/events.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([
      { path: '', component: AppsTabPage },
      { path: 'info', component: InfoPage },
      { path: 'doing', component: DoingPage },
      { path: 'tests', component: TestsPage },
      { path: 'events', component: EventsPage }
    ])
  ],
  declarations: [
    AppsTabPage,
    InfoPage,
    DoingPage,
    TestsPage,
    EventsPage
  ]
})
export class AppsTabPageModule {}
