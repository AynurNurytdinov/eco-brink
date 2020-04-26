import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PointsTabPage } from './points-tab.page';

describe('PointsTabPage', () => {
  let component: PointsTabPage;
  let fixture: ComponentFixture<PointsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PointsTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PointsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
