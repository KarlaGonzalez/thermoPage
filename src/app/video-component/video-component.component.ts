import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss']
})
export class VideoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* const media = document.querySelector('video');
    const controls = document.querySelector('.controls');
    const play = document.querySelector('.play');
    const stop = document.querySelector('.stop');
    const rwd = document.querySelector('.rwd');
    const fwd = document.querySelector('.fwd');
    this.startControls();
    play.addEventListener('click', this.playPauseMedia);
    stop.addEventListener('click', this.stopMedia);
    media.addEventListener('ended', this.stopMedia);
    rwd.addEventListener('click', this.mediaBackward);
    fwd.addEventListener('click', this.mediaForward);
    media.addEventListener('timeupdate', this.setTime); */
  }

  /* startControls() {
    console.log('startControls')
    const media = document.querySelector('video');
    media.removeAttribute('controls');
  }

  playPauseMedia() {
    console.log('playPauseMedia')
    const media = document.querySelector('video');
    const play = document.querySelector('.play');
    if(media.paused) {
      play.setAttribute('data-icon','u');
      media.play();
    } else {
      play.setAttribute('data-icon','P');
      media.pause();
    }
  }

  stopMedia() {
    console.log('stopMedia')
    const media = document.querySelector('video');
    const play = document.querySelector('.play');
    media.pause();
    media.currentTime = 0;
    play.setAttribute('data-icon','P');
  }

  mediaBackward() {
    console.log('mediaBackward')
    let intervalFwd;
    let intervalRwd;
    const media = document.querySelector('video');
    const rwd = document.querySelector('.rwd');
    const fwd = document.querySelector('.fwd');
    clearInterval(intervalFwd);
    fwd.classList.remove('active');

    if(rwd.classList.contains('active')) {
      rwd.classList.remove('active');
      clearInterval(intervalRwd);
      media.play();
    } else {
      rwd.classList.add('active');
      media.pause();
      intervalRwd = setInterval(this.windBackward, 200);
    }
  }

  mediaForward() {
    console.log('mediaForward')
    let intervalFwd;
    let intervalRwd;
    const media = document.querySelector('video');
    const rwd = document.querySelector('.rwd');
    const fwd = document.querySelector('.fwd');
    clearInterval(intervalRwd);
    rwd.classList.remove('active');

    if(fwd.classList.contains('active')) {
      fwd.classList.remove('active');
      clearInterval(intervalFwd);
      media.play();
    } else {
      fwd.classList.add('active');
      media.pause();
      intervalFwd = setInterval(this.windForward, 200);
    }
  }

  windBackward() {
    console.log('windBackward')
    let intervalRwd;
    const media = document.querySelector('video');
    const rwd = document.querySelector('.rwd');
    if(media.currentTime <= 3) {
      rwd.classList.remove('active');
      clearInterval(intervalRwd);
      this.stopMedia();
    } else {
      media.currentTime -= 3;
    }
  }
  
  windForward() {
    console.log('windForward')
    let intervalFwd;
    const media = document.querySelector('video');
    const rwd = document.querySelector('.rwd');
    const fwd = document.querySelector('.fwd');
    if(media.currentTime >= media.duration - 3) {
      fwd.classList.remove('active');
      clearInterval(intervalFwd);
      this.stopMedia();
    } else {
      media.currentTime += 3;
    }
  }

  setTime() {
    console.log('setTime')
    const timerWrapper = document.querySelector('.timer');
    const timer = document.querySelector('.timer span');
    const timerBar = document.querySelector('.timer div')[0];
    const media = document.querySelector('video');
    let minutes = Math.floor(media.currentTime / 60);
    let seconds = Math.floor(media.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }

    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }

    let mediaTime = minuteValue + ':' + secondValue;
    timer.textContent = mediaTime;

    let barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
    timerBar.style.width = barLength + 'px';
  } */

}
