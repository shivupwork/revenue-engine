import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResgisterPage } from './resgister.page';

describe('ResgisterPage', () => {
  let component: ResgisterPage;
  let fixture: ComponentFixture<ResgisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResgisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
