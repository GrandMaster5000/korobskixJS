'use strict';

import kor from '../core';

kor.prototype.on = function (eventName, callback , ...options) {
    if(!eventName || !callback) {
        return this;
    }
    
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback, ...options);
    }

    return this;
};


kor.prototype.off = function (eventName, callback , ...options) {
    if(!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback, options);
    }

    return this;
};

kor.prototype.click = function (handler, ...options) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].addEventListener) {
            continue;
        }

        if(handler) {
            this[i].addEventListener('click', handler, ...options);
        } else {
             this[i].click();
        }  
    }

    return this;
};