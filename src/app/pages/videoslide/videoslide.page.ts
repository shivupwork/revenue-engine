import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-videoslide',
  templateUrl: './videoslide.page.html',
  styleUrls: ['./videoslide.page.scss'],
})
export class VideoslidePage implements OnInit {

  sampleVideo: any;

  constructor(
    private router: Router,
    private streamingMedia: StreamingMedia
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
