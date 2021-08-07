'use strict';

import kor from "../core";

kor.prototype.addClass = function(...classNsmes) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNsmes);
    }

    return this;
};

kor.prototype.removeClass = function(...classNsmes) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
            continue;
        }

        this[i].classList.remove(...classNsmes);
    }

    return this;
};

kor.prototype.toggleClass = function(classNsmes) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
            continue;
        }

        this[i].classList.toggle(classNsmes);
    }

    return this;
};

kor.prototype.containsClass = function(classNsmes) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
            continue;
        }

        return {boolean : this[i].classList.contains(classNsmes), elements: this};
    }

    return this;
};

