'use strict';

const kor = function (selector) {
    return new kor.prototype.init(selector);
};

kor.prototype.init = function(selector) {
    if(!selector) {
        return this;
    }

    if(selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));

    this.length = document.querySelectorAll(selector).length;

    return this;
};

kor.prototype.init.prototype = kor.prototype;

window.kor = kor;

export default kor;