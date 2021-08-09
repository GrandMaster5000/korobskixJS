'use strict';

import kor from "../core";

kor.prototype.animateOverTime = function(duration, callback, finish) {
    let timeStart;
    
    function _animateOverTime(time) {
        if(!timeStart) {
            timeStart = time;
        }
        
        let timeElapsed = time - timeStart,
        complection = Math.min(timeElapsed/ duration, 1);

        callback(complection);

        if(timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if(typeof finish === 'function') {
                finish();
            }
        }
    }

    return _animateOverTime;
};

kor.prototype.fadeIn = function(duration, display = 'block', finish) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const anim = this.animateOverTime(duration, _fadeIn, finish);
        requestAnimationFrame(anim);
    }

    return this;
};

kor.prototype.fadeOut = function(duration, finish) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if(complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const anim = this.animateOverTime(duration, _fadeOut, finish);
        requestAnimationFrame(anim);
    }

    return this;
};