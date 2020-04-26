import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { LentaTabPage } from './lenta-tab.page';

describe('LentaTabPage', () => {
  let component: LentaTabPage;
  let fixture: ComponentFixture<LentaTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LentaTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LentaTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
