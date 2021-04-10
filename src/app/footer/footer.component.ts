import { Component, OnInit } from '@angular/core';
import {SongPlayerService} from '../song-player.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
 export class FooterComponent implements OnInit {

  songName: string = '';
  isPlaying: boolean = false;

  constructor(private songPlayer: SongPlayerService) {
  }

  ngOnInit(): void {
    this.songPlayer.songData.subscribe(data =>this.songName=data)
  }

  togglePlay = () => {
    if(this.songName.length!==0){
      this.isPlaying = !this.isPlaying;
      let playbutton = document.getElementById("playButton");
      if(this.isPlaying) playbutton.innerText = "pause"
      else playbutton.innerText = "play"
      this.songPlayer.togglePlay();
    }
  }


}
