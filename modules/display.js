'use strict';

import kor from "../core";

kor.prototype.show = function () {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].style) {
            continue;
        }

        this[i].style.display = '';
    }

    return this;
};

kor.prototype.hide = function () {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].style) {
            continue;
        }

        this[i].style.display = 'none';
    }

    return this;
};

kor.prototype.toggleDisplay = function () {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].style) {
            continue;
        }
        if(this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};