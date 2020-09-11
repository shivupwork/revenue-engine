import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoslide',
  templateUrl: './videoslide.page.html',
  styleUrls: ['./videoslide.page.scss'],
})
export class VideoslidePage implements OnInit {

  sampleVideo: any;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.sampleVideo = <HTMLMediaElement>document.getElementById('sampleVideo');
    this.sampleVideo.src = "assets/background-video/Revenue_Engine_Demo.mp4";
  }

  skipVideo() {
    this.sampleVideo.pause();
    this.router.navigate(['/question-start']);


  }

}
