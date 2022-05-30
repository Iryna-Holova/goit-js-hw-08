import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function() {
};
const currentTime = function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('play', onPlay);
player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (startTime) {
    startTime = 0;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});

