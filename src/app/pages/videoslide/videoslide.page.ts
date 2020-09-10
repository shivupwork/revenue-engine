import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-videoslide',
  templateUrl: './videoslide.page.html',
  styleUrls: ['./videoslide.page.scss'],
})
export class VideoslidePage implements OnInit {

  skipvideo: boolean = true;

  constructor(
    private router: Router,
    private streamingMedia: StreamingMedia
  ) {

  }

  ngOnInit() {
  }

  skipVideo() {
    this.skipvideo = false;
    this.router.navigate(['/question-start']);
    console.log(this.skipvideo)

  }

}
