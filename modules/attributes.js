'use strict';

import kor from '../core';

kor.prototype.getAtt = function (name) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute) {
            continue;
        }

        return this[i].getAttribute(name);
    }
    return this;
};

kor.prototype.setAtt = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].setAttribute) {
            continue;
        }

        this[i].setAttribute(name, value);
    }
    return this;
};

kor.prototype.hasAtt = function (name) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].hasAttribute) {
            continue;
        }

       return this[i].hasAttribute(name);
    }

    return this;
};

kor.prototype.removeAtt = function (name) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].removeAttribute) {
            continue;
        }

       this[i].removeAttribute(name);
    }

    return this;
};

kor.prototype.toggleAtt = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute) {
            continue;
        }

        if(!value) {
            return this;
        }
        if(this[i].getAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name);
        }
    }

    return this;
};