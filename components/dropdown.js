'use strict';
import kor from "../core";

kor.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = kor(this[i]).getAtt('id');
        kor(this[i]).click(() => {
            kor(`[data-toggle-id="${id}"]`).fadeToggle(200);
        });
    }
};

kor('.dropdown-toggle').dropdown();