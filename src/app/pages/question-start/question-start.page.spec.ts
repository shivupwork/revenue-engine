import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionStartPage } from './question-start.page';

describe('QuestionStartPage', () => {
  let component: QuestionStartPage;
  let fixture: ComponentFixture<QuestionStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
