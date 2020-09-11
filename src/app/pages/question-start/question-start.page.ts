import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-start',
  templateUrl: './question-start.page.html',
  styleUrls: ['./question-start.page.scss'],
})
export class QuestionStartPage implements OnInit {

  slide1: boolean = true
  slide2: boolean;
  slide3: boolean;
  slide4: boolean;
  slide5: boolean;
  slide6: boolean;
  slide7: boolean;
  slide8: boolean;
  slide9: boolean;
  slide10: boolean;
  slide11: boolean;
  slide12: boolean;


  q1: boolean = false
  q2: boolean = false
  q3: boolean = false
  q4: boolean = false
  q5: boolean = false
  q6: boolean = false
  q7: boolean = false
  q8: boolean = false
  q9: boolean = false
  q10: boolean = false
  q11: boolean = false



  constructor() { }

  ngOnInit() {
  }

  //==============================================================
  yes1() {
    this.q1 = true;
  }
  no1() {
    this.slide1 = false;
    this.slide2 = true;
  }
  unKonwn1() {
    this.slide1 = false;
    this.slide2 = true;
  }
  next1() {
    this.slide1 = false;
    this.slide2 = true;
  }
  yes2() {
    this.q2 = true;
  }
  no2() {
    this.slide2 = false;
    this.slide3 = true;
  }
  unKonwn2() {
    this.slide2 = false;
    this.slide3 = true;
  }
  next2() {
    this.slide2 = false;
    this.slide3 = true;
  }
  yes3() {
    this.q3 = true;
  }
  no3() {
    this.slide3 = false;
    this.slide4 = true;
  }
  unKonwn3() {
    this.slide3 = false;
    this.slide4 = true;
  }
  next3() {
    this.slide3 = false;
    this.slide4 = true;
  }
  yes4() {
    this.q4 = true;
  }
  no4() {
    this.slide4 = false;
    this.slide5 = true;
  }
  unKonwn4() {
    this.slide4 = false;
    this.slide5 = true;
  }
  next4() {
    this.slide4 = false;
    this.slide5 = true;
  }
  yes5() {
    this.q5 = true;
  }
  no5() {
    this.slide5 = false;
    this.slide6 = true;
  }
  unKonwn5() {
    this.slide5 = false;
    this.slide6 = true;
  }
  next5() {
    this.slide5 = false;
    this.slide6 = true;
  }
  yes6() {
    this.q6 = true;
  }
  no6() {
    this.slide6 = false;
    this.slide7 = true;
  }
  unKonwn6() {
    this.slide6 = false;
    this.slide7 = true;
  }
  next6() {
    this.slide6 = false;
    this.slide7 = true;
  }
  yes7() {
    this.q7 = true;
  }
  no7() {
    this.slide7 = false;
    this.slide8 = true;
  }
  unKonwn7() {
    this.slide7 = false;
    this.slide8 = true;
  }
  next7() {
    this.slide7 = false;
    this.slide8 = true;
  }
  yes8() {
    this.q8 = true;
  }
  no8() {
    this.slide8 = false;
    this.slide9 = true;
  }
  unKonwn8() {
    this.slide8 = false;
    this.slide9 = true;
  }
  next8() {
    this.slide8 = false;
    this.slide9 = true;
  }

  yes9() {
    this.q9 = true;
  }
  no9() {
    this.slide9 = false;
    this.slide10 = true;
  }
  unKonwn9() {
    this.slide9 = false;
    this.slide10 = true;
  }
  next9() {
    this.slide9 = false;
    this.slide10 = true;
  }
  yes10() {
    this.q10 = true;
  }
  no10() {
    alert("Question Finshed !!")
  }
  unKonwn10() {
    alert("Question Finshed !!")
  }
  next10() {
    alert("Question Finshed !!")
  }



}
