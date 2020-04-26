import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ProfileTabPage } from './profile-tab.page';

describe('ProfileTabPage', () => {
  let component: ProfileTabPage;
  let fixture: ComponentFixture<ProfileTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
