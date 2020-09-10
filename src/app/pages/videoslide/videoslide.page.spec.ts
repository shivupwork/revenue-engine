import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoslidePage } from './videoslide.page';

describe('VideoslidePage', () => {
  let component: VideoslidePage;
  let fixture: ComponentFixture<VideoslidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoslidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoslidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
