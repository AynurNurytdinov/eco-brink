import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsPostPage } from './news-post.page';

describe('NewsPostPage', () => {
  let component: NewsPostPage;
  let fixture: ComponentFixture<NewsPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
