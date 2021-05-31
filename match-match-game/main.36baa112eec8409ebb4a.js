(()=>{"use strict";var e={764:(e,t,n)=>{n.r(t)},430:(e,t,n)=>{n.r(t)},6248:(e,t,n)=>{n.r(t)},1594:(e,t,n)=>{n.r(t)},8362:(e,t,n)=>{n.r(t)},3987:(e,t,n)=>{n.r(t)},9819:(e,t,n)=>{n.r(t)},7482:(e,t,n)=>{n.r(t)},4953:(e,t,n)=>{n.r(t)},5827:(e,t,n)=>{n.r(t)},3763:(e,t,n)=>{n.r(t)},3863:(e,t,n)=>{n.r(t)},1978:(e,t,n)=>{n.r(t)},3115:(e,t,n)=>{n.r(t)},1785:(e,t,n)=>{n.r(t)},3808:(e,t,n)=>{n.r(t)},8788:(e,t,n)=>{n.r(t)},5818:(e,t,n)=>{n.r(t)},9996:(e,t,n)=>{n.r(t)},3352:(e,t,n)=>{n.r(t)},9563:(e,t,n)=>{n.r(t)},7279:(e,t,n)=>{n.r(t)},6752:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function r(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=n(8229);t.App=class{constructor(e){this.rootElement=e,this.game=new i.Game,this.rootElement.appendChild(this.game.element)}start(){return s(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json())[0],n=t.images.map((e=>`${t.category}/${e}`));this.game.newGame(n)}))}}},9981:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BestScore=void 0;const s=n(8583);n(764);class i extends s.BaseComponent{constructor(){super("div",["best-score"]),this.header=new s.BaseComponent("h1",["best-score__header"]),this.records=new s.BaseComponent("div",["records"]),this.element.appendChild(this.header.element),this.element.appendChild(this.records.element),this.header.element.innerHTML="\n    <h1>Best players</h1>\n    ",this.getAllGames()}addHTML(e){for(let t=e.length-1;t>e.length-11;t--){if(t<0)return;const n=new s.BaseComponent("div",["player"]),i=new s.BaseComponent("div",["player__info"]),o=new s.BaseComponent("p",["player__name"]),a=new s.BaseComponent("p",["player__email"]),r=new s.BaseComponent("p",["player__score"]);this.records.element.appendChild(n.element),n.element.appendChild(i.element),n.element.appendChild(r.element),i.element.appendChild(o.element),i.element.appendChild(a.element),o.element.innerHTML=`${e[t].name} ${e[t].surname}`,a.element.innerHTML=`${e[t].email}`,r.element.innerHTML=`Score: ${e[t].points}`}}getAllGames(){const e=indexedDB.open("LenarFF",1);e.onerror=function(){console.log("open db request --- onerror")},e.onsuccess=e=>{console.log("open db --- onsuccess"),e.target.result.transaction("games").objectStore("games").getAll().onsuccess=e=>{console.log(e.target.result);const t=e.target.result;this.addHTML(t)}},e.onupgradeneeded=function(e){console.log("open db --- onupgradeneeded");const t=e.target.result;t.objectStoreNames.contains("games")||t.createObjectStore("games",{keyPath:"points",autoIncrement:!0},{unique:!1})}}}t.BestScore=i},7366:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutGame=void 0;const s=n(8583);n(430);class i extends s.BaseComponent{constructor(){super("div",["about-game"]),this.element.innerHTML='\n    <div class="block-wrapper">\n    <div class="top-blocks">\n      <div class="block">\n        <p class="block__text">\n          1) Register new player in game\n        </p>\n      </div>\n      <div class="block register-img">\n      </div>\n    </div>\n    <div class="middle-blocks">\n      <div class="block">\n        <p class="block-text">2) Configure your game settings</p>\n      </div>\n      <div class="block settings-img">\n      </div>\n    </div>\n    <div class="bottom-blocks">\n      <div class="block">\n        <p class="block-text">\n          3) Start you new game! Remember card positions and match it before times up.\n        </p>\n      </div>\n      <div class="block game-img">\n      </div>\n    </div>\n  </div>\n    '}}t.AboutGame=i},8583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},6954:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AddButton=void 0;const s=n(7536),i=n(1848);n(6248);class o extends i.FormButton{constructor(e,t,n){super("add user",["add-button"]),this.changeInput=(e,t,n)=>{e.oninput=()=>{this.validate(e.value,t.value,n.value),this.addClass(e,this.validateName)},t.oninput=()=>{this.validate(e.value,t.value,n.value),this.addClass(t,this.validateName)},n.oninput=()=>{this.validate(e.value,t.value,n.value),this.addClass(n,this.validateEmail)}},this.validate=(e,t,n)=>this.validateName(e)&&this.validateName(t)&&this.validateEmail(n)?(this.element.classList.add("box-shadow"),!0):(this.element.classList.remove("box-shadow"),!1),this.validateName=e=>/^([a-zа-яё]+)$/i.test(e)&&e.length<30,this.validateEmail=e=>/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(e)&&e.length<30,this.addClass=(e,t)=>{t(e.value)?(e.classList.add("input_success"),e.classList.remove("input_error")):(e.classList.remove("input_success"),e.classList.add("input_error"))},this.changeHeaderButton=()=>{document.querySelector(".register-button").classList.add("hidden"),document.querySelector(".start-button").classList.remove("hidden")},this.validateReport=(e,t)=>{e.classList.add("input_error"),e.value?"email"===t?e.setCustomValidity("Email address must contain @"):e.setCustomValidity(`The ${t} must be only letters and no longer than 30 characters`):e.setCustomValidity(`Enter your ${t}`),setTimeout((()=>{e.setCustomValidity("")}),3e3),e.reportValidity()},this.name=e,this.surname=t,this.email=n,this.changeInput(e,t,n)}buttonHandler(){super.buttonHandler(),this.validate(this.name.value,this.surname.value,this.email.value)?(s.user.name=this.name.value,s.user.surname=this.surname.value,s.user.email=this.email.value,this.clearInput(),this.hiddenForm(),this.changeHeaderButton()):(this.validateName(this.name.value)||this.validateReport(this.name,"name"),this.validateName(this.surname.value)||this.validateReport(this.surname,"surname"),this.validateEmail(this.email.value)||this.validateReport(this.email,"email"))}}t.AddButton=o},9113:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const s=n(8583);n(1594);class i extends s.BaseComponent{constructor(e,t=[]){super("button",["button","box-shadow"]),this.element.innerHTML=`\n  <p class='button__text'>${e}</p>\n  `,this.element.classList.add(...t),this.element.addEventListener("click",(e=>{e.preventDefault(),this.buttonHandler()}))}buttonHandler(){this.element}}t.Button=i},6806:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CancelButton=void 0;const s=n(1848);n(8362);class i extends s.FormButton{constructor(){super("cancel",["cancel-button"])}buttonHandler(){super.buttonHandler(),this.hiddenForm(),this.clearInput()}}t.CancelButton=i},1848:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FormButton=void 0;const s=n(9113);class i extends s.Button{constructor(){super(...arguments),this.clearInput=()=>{document.getElementById("name").value="",document.getElementById("name").classList.remove("input_success","input_error"),document.getElementById("surname").value="",document.getElementById("surname").classList.remove("input_success","input_error"),document.getElementById("email").value="",document.getElementById("email").classList.remove("input_success","input_error")},this.hiddenForm=()=>{const e=document.querySelector(".cover"),t=document.querySelector(".register-form");e.classList.add("hidden"),t.classList.add("hidden")}}}t.FormButton=i},5465:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterButton=void 0;const s=n(9113);n(3987);class i extends s.Button{constructor(){super("register new player",["register-button"])}buttonHandler(){super.buttonHandler();const e=document.querySelector(".cover"),t=document.querySelector(".register-form");e.classList.remove("hidden"),t.classList.remove("hidden")}}t.RegisterButton=i},290:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StartButton=void 0;const s=n(4310),i=n(9113);n(9819);class o extends i.Button{constructor(){super("start game",["start-button","hidden"])}buttonHandler(){super.buttonHandler(),s.settings.startGame=!0,document.querySelectorAll(".card").forEach((e=>{e.classList.remove(".flipped")}))}}t.StartButton=o},8832:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StopButton=void 0;const s=n(7242),i=n(7536),o=n(9113),a=n(290);n(7482);class r extends o.Button{constructor(){super("stop game",["stop-button","hidden"])}buttonHandler(){super.buttonHandler(),s.indexDBAdd(i.user.name,i.user.surname,i.user.email,i.user.point),(new a.StartButton).element.classList.remove("hidden")}}t.StopButton=r},4977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0,n(4953);const s=n(8583);class i extends s.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.isFlipped=!1,this.element.innerHTML=`\n      <div class="card">\n        <div class="card__front" style="background-image: url('./images/${e}')"></div>\n        <div class="card__back"></div>\n      </div>\n    `}flipToBack(){return this.isFlipped=!0,this.flip(!0)}flipToFront(){return this.isFlipped=!1,this.flip()}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=i},2101:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Cover=void 0;const s=n(8583);n(5827);class i extends s.BaseComponent{constructor(){super("div",["cover","hidden"]),this.hide=()=>{const e=document.querySelector(".cover"),t=document.querySelector(".register-form");e.classList.add("hidden"),t.classList.add("hidden")},this.element.addEventListener("click",(()=>this.hide()))}}t.Cover=i},2249:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0,n(3763);const s=n(8583),i=n(4310);class o extends s.BaseComponent{constructor(){super("div",["cards-field"]),this.cards=[]}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e.slice(0,i.settings.complexity),this.cards.forEach((e=>this.element.appendChild(e.element))),this.cards.forEach((e=>e.flipToFront())),setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),1e3*i.settings.SHOW_TIME)}}t.CardsField=o},6286:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GameSettings=void 0;const s=n(8583);n(3863);class i extends s.BaseComponent{constructor(){super("div",["game-settings"]),this.element.innerHTML="\n    <h1>Game settings</h1>\n    "}}t.GameSettings=i},8229:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function r(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const i=n(4680),o=n(8583),a=n(4977),r=n(2249),l=n(2610);n(1978);const d=n(4310),c=n(7536);class u extends o.BaseComponent{constructor(){var e;super(),this.isAnimation=!1,this.cardsField=new r.CardsField,this.timer=new l.Timer,this.comparisonCounter=0,this.element.appendChild(this.timer.element),this.element.appendChild(this.cardsField.element),null===(e=document.querySelector(".stop-button"))||void 0===e||e.addEventListener("click",(()=>{console.log(this.points),c.user.point=this.points}))}newGame(e){this.cardsField.clear();const t=e.concat(e).map((e=>new a.Card(e))).sort((()=>Math.random()-.5));t.forEach((e=>{e.element.addEventListener("click",(()=>this.cardHandler(e)))})),this.cardsField.addCards(t),this.timer.timerInterval(d.settings.SHOW_TIME)}cardHandler(e){return s(this,void 0,void 0,(function*(){if(!this.isAnimation&&e.isFlipped){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image?(this.activeCard.element.classList.add("red"),e.element.classList.add("red"),this.comparisonCounter--,yield i.delay(d.settings.FLIP_DELAY),yield Promise.all([this.activeCard.flipToBack(),e.flipToBack()]),this.activeCard.element.classList.remove("red"),e.element.classList.remove("red")):(this.activeCard.element.classList.add("green"),e.element.classList.add("green"),this.comparisonCounter++),this.activeCard=void 0,this.isAnimation=!1}}))}get points(){return 100*this.comparisonCounter-10*this.timer.timeCounter}}t.Game=u},1366:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,n(3115);const s=n(8583),i=n(1185),o=n(9122),a=n(8832),r=n(5465),l=n(290);class d extends s.BaseComponent{constructor(){super("header",["header"]),this.logo=new i.Logo,this.nav=new o.Nav,this.registerButton=new r.RegisterButton,this.startButton=new l.StartButton,this.startButton=new l.StartButton,this.stopButton=new a.StopButton,this.element.appendChild(this.logo.element),this.element.appendChild(this.nav.element),this.element.appendChild(this.registerButton.element),this.element.appendChild(this.startButton.element),this.element.appendChild(this.stopButton.element)}}t.Header=d},9069:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const s=n(8583);n(1785);class i extends s.BaseComponent{constructor(e,t,n){super("input",["input"]),this.element.type=e,this.element.placeholder=t,this.element.id=n}}t.Input=i},3880:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const s=n(8583);n(3808);class i extends s.BaseComponent{constructor(e,t){super("label",["label"]),this.element.htmlFor=e,this.element.innerHTML=`${t}`}}t.Label=i},1185:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=void 0;const s=n(8583);n(8788);class i extends s.BaseComponent{constructor(){super("div",["logo-wrap"]),this.element.innerHTML='\n    <a class="logo-link" href=#>\n    <div class="logo__top">Match</div>\n    <div class="logo__bottom">Match</div>\n    </a>\n    '}}t.Logo=i},9122:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Nav=void 0;const s=n(8583);n(5818);class i extends s.BaseComponent{constructor(){super("nav",["nav"]),this.element.innerHTML='\n    <ul class="nav__list">\n      <li class="nav__list-element">\n        <a href="#/about-game/" id="about-game" class="nav__list-link">About Game</a>\n      </li>\n      <li class="nav__list-element">\n        <a href="#/best-score/" id="best-score" class="nav__list-link">Best Score</a>\n      </li>\n      <li class="nav__list-element">\n        <a href="#/game-settings" id="game-settings" class="nav__list-link">Game Settings</p>\n        </a>\n      </li>\n    </ul>\n    '}}t.Nav=i},6459:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FormWrap=void 0;const s=n(8583),i=n(6954),o=n(6806),a=n(9069),r=n(3880);n(9996);class l extends s.BaseComponent{constructor(){super("form",["formWrap"]),this.labelName=new r.Label("name","First Name"),this.labelSurname=new r.Label("surname","Last Name"),this.labelEmail=new r.Label("email","Email"),this.inputName=new a.Input("text","...","name"),this.inputSurname=new a.Input("text","...","surname"),this.inputEmail=new a.Input("email","...","email"),this.buttonWrap=new s.BaseComponent("div",["button-wrap"]),this.addButton=new i.AddButton(this.inputName.element,this.inputSurname.element,this.inputEmail.element),this.cancelButton=new o.CancelButton,this.element.appendChild(this.labelName.element),this.element.appendChild(this.inputName.element),this.element.appendChild(this.labelSurname.element),this.element.appendChild(this.inputSurname.element),this.element.appendChild(this.labelEmail.element),this.element.appendChild(this.inputEmail.element),this.element.appendChild(this.buttonWrap.element),this.buttonWrap.element.appendChild(this.addButton.element),this.buttonWrap.element.appendChild(this.cancelButton.element),this.addButton.element.classList.remove("box-shadow")}}t.FormWrap=l},9817:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterForm=void 0;const s=n(8583),i=n(6459);n(3352);class o extends s.BaseComponent{constructor(){super("div",["register-form","hidden"]),this.formHeader=new s.BaseComponent("h1",["form__header"]),this.formWrap=new i.FormWrap,this.userWrap=new s.BaseComponent("div",["user-wrap"]),this.photoWrap=new s.BaseComponent("div",["photo-wrap"]),this.element.appendChild(this.formHeader.element),this.element.appendChild(this.userWrap.element),this.userWrap.element.appendChild(this.formWrap.element),this.userWrap.element.appendChild(this.photoWrap.element),this.formHeader.element.innerHTML="Register new Player"}}t.RegisterForm=o},2610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0,n(9563);const s=n(8583);class i extends s.BaseComponent{constructor(){super("div",["timer"]),this.timeCounter=0,this.playTime=0,this.element.innerHTML=`\n    <span id="timer">${this.timeCounter}</span>\n    `}countSecond(e){this.timeCounter++;const t=document.getElementById("timer");t&&(t.innerHTML=`${this.timeCounter}`)}timerInterval(e){const t=setInterval((()=>{this.countSecond(e),this.timeCounter>=e&&(clearInterval(t),this.timeCounter=0,this.playTimer())}),1e3)}playTimer(){setInterval((()=>{this.countSecond(300),this.playTime++}),1e3)}}t.Timer=i},7242:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.indexDBAdd=void 0,t.indexDBAdd=function(e,t,n,s){let i;const o=indexedDB.open("LenarFF",1);o.onerror=function(){throw new Error("indexDB error")},o.onsuccess=function(o){console.log("open db --- onsuccess"),i=o.target.result,function(e,t,n,s,i){const o={name:e,surname:t,email:n,points:s>0?s:0},a=i.transaction("games","readwrite").objectStore("games").add(o);console.dir(a),a.onsuccess=function(){console.log("Партия записана в БД")},a.onerror=function(e){console.log("Ошибка при записи в БД",e.target.error)}}(e,t,n,s,i)},o.onupgradeneeded=function(e){console.log("open db --- onupgradeneeded"),i=e.target.result,i.objectStoreNames.contains("games")||i.createObjectStore("games",{keyPath:"points",autoIncrement:!0},{unique:!1})}}},4310:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.settings=void 0,t.settings={complexity:12,FLIP_DELAY:1e3,SHOW_TIME:3,startGame:!1}},4680:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}},7536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.user=void 0,t.user={name:"fsd",surname:"fgdg",email:"dfg",point:0}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(7279);const e=n(6752),t=n(7366),s=n(9981),i=n(6286),o=n(1366),a=n(8583),r=n(2101),l=n(9817),d=new t.AboutGame,c=new s.BestScore,u=new i.GameSettings;function m(){const e=document.querySelector(".stop-button");null==e||e.classList.add("hidden")}function p(){const e=document.querySelector(".start-button");null==e||e.classList.remove("hidden")}window.addEventListener("load",(()=>{window.location.hash="#"})),window.onload=()=>{const t=document.getElementById("app");if(!t)throw Error("App root element not found");const n=new o.Header,s=new a.BaseComponent("main",["wrapper"]),i=new r.Cover,h=new l.RegisterForm;t.appendChild(n.element),t.appendChild(s.element),t.appendChild(i.element),t.appendChild(h.element),s.element.append(d.element);if(window.location){const t=document.querySelectorAll(".nav__list-link"),n=document.querySelector(".start-button"),i=document.querySelector(".stop-button");if(null==n||n.addEventListener("click",(()=>{"#/game/"!==window.location.hash&&(window.location.hash="#/game/")})),null==i||i.addEventListener("click",(()=>{"#/best-score/"!==window.location.hash&&(window.location.hash="#/best-score/")})),!t)throw Error("navEl element not found");window.addEventListener("hashchange",(()=>{(t=>{switch(s.element.innerHTML="",t){case"#/about-game/":s.element.append(d.element),m(),p();break;case"#/best-score/":s.element.append(c.element),m(),p();break;case"#/game-settings":s.element.append(u.element),m(),window.onload=()=>p();break;case"#/game/":new e.App(s.element).start(),function(){const e=document.querySelector(".stop-button");null==e||e.classList.remove("hidden")}(),function(){const e=document.querySelector(".start-button");null==e||e.classList.add("hidden")}();break;default:s.element.append(d.element)}})(window.location.hash)}))}}})()})();