// import style from '../css/style.css';
//http://w3c.github.io/webcomponents/spec/custom/#custom-elements-autonomous-example
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
    const x = 'hi';
    console.log(x);
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
    let projectStyles = `
    <style>

        .material-icons {
          font-family: icons;
        }
        * {
        box-sizing: border-box;
      }
        .row {
          margin-left: -15px;
          margin-right: -15px;
        }
        
        .row:after {
        display: table;
        clear: both;
        content: '';
        }
        
        .col-1, .col-2, .col-6, .col-12,  
        .col-sm-1, .col-sm-9, .col-md-3, .col-md-9 {
          float: left;
          padding-left: 15px;
          padding-right: 15px;
          min-height: 1px;
        }
        .col-1 { width: 8.33333333%;}
        .col-2 { width: 16.66666667%}
        .col-6 { width: 50%; }
        
        .col-12 { width: 100%; }
        @media (min-width: 768px) {
          .col-sm-9 {width: 75%;}
          .col-sm-1 {width: 8.33333333%;}
        }
        
        @media (min-width: 1024px) {
            .col-md-9 {width: 75%;}
            .col-md-3 { width: 25%; }
        }
        
    .header {
      padding-top: 10px;
      margin: 0 auto;
      max-width: 1024px;
      font-family: Verdana,Arial,sans-serif;
    }
    
    .header__top {
      margin-bottom: 15px;
    }
    
    .header__icon {
      font-size: 30px;
      line-height: 44px;
      width: 30px;
      cursor: pointer;
    }
    
    .header__mid {
      border-top: 1px solid #9a9a9a;
      border-bottom: 1px solid #9a9a9a;
      position: relative;
      box-sizing: border-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: -webkit-box;
      display: flex;
      -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
      -webkit-box-flex: 0;
      flex: 0 1 auto;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    
    .header__popover:hover .popover__item {
      display: block;
    }
    
    .popover__item {
      display: none;
      opacity: 0;
      position: absolute;
      top: 45px;
      right: 0;
      transition: all, .3s;
      padding: 10px;
      background-color: #ffffff;
      border-bottom: 1px solid #9a9a9a;
      border-left: 1px solid #9a9a9a;
      border-right: 1px solid #9a9a9a;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      z-index: 2;
      min-width: 320px;
    }
    
    .popover__item.is-open {
      opacity: 1;
    }
    
    .popover__item:before {
      content: "";
      height: 15px;
      width: 100%;
      position: absolute;
      top: -2px;
      right: 0;
    }
    
    .popover__item--email {
      padding: 10px 10px 10px 40px;
    }
    
    .material-icons--email,
    .material-icons--input,
    .material-icons--person {
      font-size: 20px;
      margin: 0 5px 0 0;
      position: relative;
    }
    
    .material-icons--person {
      top: 2px;
    }
    
    .material-icons--input {
      top: 5px;
    }
    
    .material-icons--email {
      position: absolute;
      top: 50%;
      margin-top: -10px;
      left: 10px;
    }
    
    .logo {
      font-size: 36px;
      font-weight: 100;
      margin: 0;
    }
    
    .search {
      padding: 5px 0 0;
    }
    
    .search__input {
      border: 1px solid #9a9a9a;
      float: left;
      font-size: 14px;
      padding: 10px;
      width: 86%;
      height: 40px
    }
    
    .search:after {
      content: "";
      clear: both;
      display: table;
    }
    
    .search__btn {
      border-right: 1px solid #9a9a9a;
      border-top: 1px solid #9a9a9a;
      border-bottom: 1px solid #9a9a9a;
      border-left: none;
      height: 40px;
      cursor: pointer;
      display: block;
      float: left;
      font-size: 36px;
      text-align: center;
      width: 14%;
      background: none;
    }
  </style>`;
    let template = `
    <header id="header" class="header">
      <section class="row header__top">
        <div class="col-12 col-md-3"><h1 class="logo">Intranet</h1></div>
        <div class="col-12 col-md-9">
          <div class="search">
            <input type="search" class="search__input" placeholder="What are you looking for?" value="" />
            <button (click)="submitSearch()" class="search__btn material-icons">search</button>
          </div>
        </div>
      </section>
      <section class="header__mid">
        <div class="col-2 col-sm-1"><a class="material-icons header__icon" routerLink="/">home</a></div>
        <div class="col-6 col-sm-9"></div>
        <div class="col-2 col-sm-1">
          <div class="header__popover"><a (click)="openPopover()" href="#email" class="material-icons header__icon">help</a>
            <div
              id="email"
              [ngClass]="{
              'is-open' : isEmailOpen == true
              }"
              class="popover__item popover__item--email">
              <i class="material-icons material-icons--email">email</i><<a
              href="mailto:intranet@akelius.com" target="_top">intranet@akelius.com</a></div>
          </div>
        </div>
        <div class="col-2 col-sm-1">
          <button
            *ngIf="!auth.isAuthenticated()"
            (click)="auth.login()"
            class="material-icons header__icon">settings</button>
          <div *ngIf="auth.isAuthenticated()" class="header__popover">
            <a (click)="togglePopover($event)" href="#login" class="material-icons header__icon">settings</a>
            <div
              id="login"
              class="popover__item"
              [ngClass]="{
              'is-open' : isPopoverOpen == true
              }">
              <div><i class="material-icons material-icons--person">person</i></div>
              <div>
                <i class="material-icons material-icons--input">input</i>
                <span></span>
                <button (click)="auth.logout()">Log out</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
    `;

    this.shadow.innerHTML = projectStyles + template;
  }



}

window.customElements.define('header-akelius', HeaderAkelius);
