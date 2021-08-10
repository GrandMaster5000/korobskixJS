'use strict';

export default class Customizator {
    constructor ({changeElemSelector, defaultColor = '#ffffff'}) {
        this.btnBlock = document.createElement('div');
        this.colorPicker = document.createElement('input');
        this.scale = localStorage.getItem('scale') || 1;
        this.color = localStorage.getItem('color') || defaultColor;
        this.clear = document.createElement('div');
        this.changeElemSelector = changeElemSelector;
        this.defaultColor = defaultColor;
        console.log(changeElemSelector);

        this.btnBlock.addEventListener('click', e => {
            this.onScaleChange(e);
        });
        this.colorPicker.addEventListener('input', e => this.onColorChange(e));
        this.clear.addEventListener('click', () => this.reset());
    }

    reset() {
        localStorage.clear();
        this.scale = 1;
        this.color = this.defaultColor;
        this.setBgColor();
        this.onScaleChange();
    }

    onColorChange(event) {
        const changeElem = document.querySelectorAll(this.changeElemSelector);
        changeElem.forEach(item => {
            item.style.backgroundColor = event.target.value;
        });
        localStorage.setItem('color', event.target.value);
    } 

    setBgColor() {
        const changeElem = document.querySelectorAll(this.changeElemSelector);
        changeElem.forEach(item => {
            item.style.backgroundColor = this.color;
        });
        this.colorPicker.value = this.color;
    }

    injectStyle() {
        const style = document.createElement('style');
        style.innerHTML = ` 
            .kor__panel {
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: fixed;
                top: 10px;
                right: 0;
                border: 1px solid rgba(0,0,0, .2);
                box-shadow: 0 0 20px rgba(0,0,0, .5);
                width: 300px;
                height: 60px;
                background-color: #fff;
            
            }
            
            .kor__scale {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100px;
                height: 40px;  
            }
            
            .kor__scale_btn {
                display: block;
                width: 40px;
                height: 40px;
                border: 1px solid rgba(0,0,0, .2);
                border-radius: 4px;
                font-size: 18px;
            }

            .kor__color {
                width: 40px;
                height: 40px;
            }

            .kor__clear {
                font-size: 20px;
                cursor: pointer;
            }
        `;

        document.querySelector('head').appendChild(style);
    }

    onScaleChange(event) {
        const body = document.querySelector('body');

        if(event) {
            this.scale = +event.target.value.replace(/[^.\d]/g, '');
        }
        
        const recursy = (elem) => {
            elem.childNodes.forEach(node => {
                if(node.nodeName === '#text' && node.nodeValue.replace(/\s/g, '').length > 0) {
                    if(!node.parentNode.getAttribute('data-fz')) {
                        let fz = window.getComputedStyle(node.parentNode, null).fontSize;
                        node.parentNode.setAttribute('data-fz', +fz.replace(/px/g, ''));
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
                    } else {
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
                    }

                    
                } else {
                    recursy(node);
                }
            });
        }

        recursy(body);

        localStorage.setItem('scale', this.scale);
    }

    render() {
        this.injectStyle();
        this.setBgColor();
        this.onScaleChange();

        let scaleInputS = document.createElement('input'),
            scaleInputM = document.createElement('input'),
            panel = document.createElement('div');

        this.btnBlock.classList.add('kor__scale');
        panel.classList.add('kor__panel');
        this.colorPicker.classList.add('kor__color');
        this.colorPicker.setAttribute('type', 'color');
        this.colorPicker.setAttribute('value', '#ffffff');
        scaleInputS.setAttribute('value', '1x');
        scaleInputM.setAttribute('value', '1.5x');
        this.clear.innerHTML = '&times;';
        this.clear.classList.add('kor__clear');

        [scaleInputS, scaleInputM].forEach(input => {
            input.setAttribute('type', 'button');
            input.classList.add('kor__scale_btn');
        });
        
        this.btnBlock.append(scaleInputS, scaleInputM);
        panel.append(this.btnBlock, this.colorPicker, this.clear);

        document.querySelector('body').append(panel);  
    }
}