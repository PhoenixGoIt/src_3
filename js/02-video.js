const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', (function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  })); 

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime)
}

//------------------------------------------------Ошибки------------------------------------------------\\
//const Vimeo = require('@vimeo/player');
//window.Vimeo = require('@vimeo/player');
//import Vimeo from '@vimeo/player'; 

//Uncaught TypeError: (0 , _playerDefault.default).Player is not a constructor
//at 2KCbX.@parcel/transformer-js/src/esmodule-helpers.js (02-video.cc7354fd.js:564:16)
//at newRequire (02-video.cc7354fd.js:71:24)
//at 02-video.cc7354fd.js:122:5
//at 02-video.cc7354fd.js:145:3



//Выдаёт эту ошибку, пытался исправить но ничего не помогло :\



//player.on('timeupdate', _.throttle(function(data) {
//    localStorage.setItem('videoplayer-current-time', data.seconds);
//  }, 1000));

//Uncaught ReferenceError: _ is not defined
//at 2KCbX (02-video.cc7354fd.js:562:25)
//at newRequire (02-video.cc7354fd.js:71:24)
//at 02-video.cc7354fd.js:122:5
//at 02-video.cc7354fd.js:145:3
//------------------------------------------------Ошибки------------------------------------------------\\