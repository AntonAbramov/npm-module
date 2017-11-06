//http://w3c.github.io/webcomponents/spec/custom/#custom-elements-autonomous-example
import style from '../css/style.css';
'use strict';


/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
/*
export default (function(){
    const x = 'hi';
    console.log(x);
    return {
      customFunc: (number, locale) => {
        return number.toLocaleString(locale);
      }
    }
  })();
*/


class HeaderAkelius extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.createShadowRoot();
    this._url = '';
    let that = this;
    this.addEventListener('click', () => {
      console.log('clicked');
    })
  }

  get url() {
    return this._url;
  }

  set url(val) {
    this.setAttribute('url', val);
  }

  static get observedAttributes() {
    return [ 'url' ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    switch(name) {
      case 'url':
        this._url = newVal;
    }
  }

  connectedCallback() {
    let template = `
    <style>
      header {
          background: red;
      }
    </style>
    <header>
        <div>header link=  ${this.url}</div>
    </header>
    `;

    this.shadow.innerHTML = template
  }



}

window.customElements.define('header-akelius', HeaderAkelius);
