'use strict';
import kor from "../core";

kor.prototype.tab = function () {
    for(let i = 0 ; i < this.length; i++) {
        kor(this[i]).on('click', () => {
           kor(this[i])
           .addClass('tab-item--active')
           .siblings()
           .removeClass('tab-item--active')
           .closest('.tab')
           .find('.tab-content')
           .removeClass('tab-content--active')
           .eq(kor(this[i]).index())
           .addClass('tab-content--active');
        });
    }
};

kor('[data-tabpanel] .tab-item').tab();