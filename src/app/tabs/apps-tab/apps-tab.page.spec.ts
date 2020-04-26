import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AppsTabPage } from './apps-tab.page';

describe('AppsTabPage', () => {
  let component: AppsTabPage;
  let fixture: ComponentFixture<AppsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppsTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
