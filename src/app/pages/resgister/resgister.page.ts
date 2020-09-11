import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.page.html',
  styleUrls: ['./resgister.page.scss'],
})
export class ResgisterPage implements OnInit {
  subscribe: any;
  constructor(
    private router: Router,
    private platform: Platform,


  ) {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.constructor.name == "ResgisterPage") {
        if (window.confirm("Do you want to Exit ?")) {
          navigator["app"].exitApp();
        }
      }

    })
  }

  ngOnInit() {

  }

  signUp() {
    this.router.navigate(['/videoslide']);
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
