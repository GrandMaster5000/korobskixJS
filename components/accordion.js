'use strict';
import kor from "../core";

kor.prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        kor(this[i]).click(() => {
            kor(this[i]).toggleClass(headActive);
            kor(this[i].nextElementSibling).toggleClass(contentActive);

            if(this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
};

kor('.accordion-head').accordion();