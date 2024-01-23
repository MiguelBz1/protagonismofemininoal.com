class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

/* carrosel */

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});



//mobile menu
const menu = document.getElementById('mobile-menu');
let   menu1 = document.getElementById('menu');
let    back = document.getElementById('back');
let item = document.getElementsByClassName('menu-item');
let teste = 0 

let nav = document.getElementsByClassName('nav-list');

function fundo(){

    
  console.log(teste)
  if(window.screen.width < 1200) { // aqui você define o tamanho pra mobile
    if(teste >=1){
  
  
        teste-=1
        menu.style.paddingLeft = "290px";    
  
  
        menu1.addEventListener('click', function(){ back.style.display = 'none' });
        back.addEventListener('click', function(){ back.style.display = 'none' });
     
   
      
      
      
    }
    else{
        menu.style.paddingLeft = "90px"
   
        teste = teste+1
  
        for (var i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function(){ back.style.display = 'none'});
        }
        menu1.addEventListener('click', function(){ back.style.display = 'block' });
        back.addEventListener('click', function(){ back.style.display = 'none' });
     
      
     
      
      
    }
   
}
  else if(teste >=1){
      
      
      teste-=1
      menu.style.paddingLeft = menu.style.fontSize; 
      menu.style.paddingRight = "0"

           
      menu1.addEventListener('click', function(){ back.style.display = 'none' });
    
    
    
  }
  else{
      menu.style.paddingLeft = "0"
 
  
      teste = teste+1
      menu.style.transition = "padding-Right 2s";    
   
      for (var i = 0; i < item.length; i++) {
          item[i].addEventListener('click', function(){ back.style.display = 'none'});
      }
      
      menu1.addEventListener('click', function(){ back.style.display = 'block' });
   
   
    
    
  }
}   
function fonte(e) {

    var elemento = $(".text-center");
    var elemento1 = $(".text-head");
    var fonte = parseInt(elemento.css('font-size'));
    var fonte2 = parseInt(elemento1.css('font-size'));
    var body = $("body");
    const fonteNormal = parseInt(body.css('font-size'));


    if (e == 'a') {
        fonte++;
    }
    if (e == 'd') {
        fonte--;
    }
    if (e == 'n') {
        fonte = fonteNormal;
    }

    elemento.css("fontSize", fonte);
    if (e == 'a') {
        fonte2++;
    }
    if (e == 'd') {
        fonte2--;
    }
    if (e == 'n') {
        fonte2 = fonteNormal;
    }

    elemento1.css("fontSize", fonte2);
}
let contaudio = 0
function playAudio() {

    if (contaudio >= 1) {
        let x = document.getElementById("myAudio");
        x.pause();
        contaudio -= 1
    }
    else {
        let x = document.getElementById("myAudio");
        x.play();
        contaudio += 1
    }

}



var player = document.getElementById("myAudio");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}

player.onpause = function () {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
    let ct = player.currentTime;
    current1.innerHTML = timeFormat(ct);
    //progress
    let duration = player.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}

/* GESSIKA2 */

var GÉSSIKA2 = document.getElementById("GÉSSIKA2");
let playbtn1 = document.getElementById("playbtn1");
var playpause = function () {
    if (GÉSSIKA2.paused) {
        GÉSSIKA2.play();
    } else {
        GÉSSIKA2.pause();
    }
}

playbtn1.addEventListener("click", playpause);

GÉSSIKA2.onplay = function () {
    playbtn1.classList.remove("fa-play");
    playbtn1.classList.add("fa-pause");
}

GÉSSIKA2.onpause = function () {
    playbtn1.classList.add("fa-play");
    playbtn1.classList.remove("fa-pause");
}

GÉSSIKA2.ontimeupdate = function () {
    let ct = GÉSSIKA2.currentTime;
    current2.innerHTML = timeFormat(ct);
    //progress
    let duration = GÉSSIKA2.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* GESSIKA3 */

var GÉSSIKA3 = document.getElementById("GÉSSIKA3");
let playbtn3 = document.getElementById("playbtn3");
var playpause = function () {
    if (GÉSSIKA3.paused) {
        GÉSSIKA3.play();
    } else {
        GÉSSIKA3.pause();
    }
}

playbtn3.addEventListener("click", playpause);

GÉSSIKA3.onplay = function () {
    playbtn3.classList.remove("fa-play");
    playbtn3.classList.add("fa-pause");
}

GÉSSIKA3.onpause = function () {
    playbtn3.classList.add("fa-play");
    playbtn3.classList.remove("fa-pause");
}

GÉSSIKA3.ontimeupdate = function () {
    let ct = GÉSSIKA3.currentTime;
    current3.innerHTML = timeFormat(ct);
    //progress
    let duration = GÉSSIKA3.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/*Wanessa 1*/


var playerW = document.getElementById("playerW");
let playbtnW = document.getElementById("playbtnW");
var playpause = function () {
    if (playerW.paused) {
        playerW.play();
    } else {
        playerW.pause();
    }
}

playbtnW.addEventListener("click", playpause);

playerW.onplay = function () {
    playbtnW.classList.remove("fa-play");
    playbtnW.classList.add("fa-pause");
}

playerW.onpause = function () {
    playbtnW.classList.add("fa-play");
    playbtnW.classList.remove("fa-pause");
}

playerW.ontimeupdate = function () {
    let ct = playerW.currentTime;
    currentW.innerHTML = timeFormat(ct);
    //progress
    let duration = playerW.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}
/* Wanessa2 */
var playerW1 = document.getElementById("playerW1");
let playbtnW1 = document.getElementById("playbtnW1");
var playpause = function () {
    if (playerW1.paused) {
        playerW1.play();
    } else {
        playerW1.pause();
    }
}

playbtnW1.addEventListener("click", playpause);

playerW1.onplay = function () {
    playbtnW1.classList.remove("fa-play");
    playbtnW1.classList.add("fa-pause");
}

playerW1.onpause = function () {
    playbtnW1.classList.add("fa-play");
    playbtnW1.classList.remove("fa-pause");
}

playerW1.ontimeupdate = function () {
    let ct = playerW1.currentTime;
    currentW1.innerHTML = timeFormat(ct);
    //progress
    let duration = playerW1.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Priscila */
var playerP = document.getElementById("playerP");
let playbtnP = document.getElementById("playbtnP");
var playpause = function () {
    if (playerP.paused) {
        playerP.play();
    } else {
        playerP.pause();
    }
}

playbtnP.addEventListener("click", playpause);

playerP.onplay = function () {
    playbtnP.classList.remove("fa-play");
    playbtnP.classList.add("fa-pause");
}

playerP.onpause = function () {
    playbtnP.classList.add("fa-play");
    playbtnP.classList.remove("fa-pause");
}

playerP.ontimeupdate = function () {
    let ct = playerP.currentTime;
    currentP.innerHTML = timeFormat(ct);
    //progress
    let duration = playerP.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}


/* Priscila1 */
var playerP1 = document.getElementById("playerP1");
let playbtnP1 = document.getElementById("playbtnP1");
var playpause = function () {
    if (playerP1.paused) {
        playerP1.play();
    } else {
        playerP1.pause();
    }
}

playbtnP1.addEventListener("click", playpause);

playerP1.onplay = function () {
    playbtnP1.classList.remove("fa-play");
    playbtnP1.classList.add("fa-pause");
}

playerP1.onpause = function () {
    playbtnP1.classList.add("fa-play");
    playbtnP1.classList.remove("fa-pause");
}

playerP1.ontimeupdate = function () {
    let ct = playerP1.currentTime;
    currentP1.innerHTML = timeFormat(ct);
    //progress
    let duration = playerP1.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}
/* Priscila2 */
var playerP2 = document.getElementById("playerP2");
let playbtnP2 = document.getElementById("playbtnP2");
var playpause = function () {
    if (playerP2.paused) {
        playerP2.play();
    } else {
        playerP2.pause();
    }
}

playbtnP2.addEventListener("click", playpause);

playerP2.onplay = function () {
    playbtnP2.classList.remove("fa-play");
    playbtnP2.classList.add("fa-pause");
}

playerP2.onpause = function () {
    playbtnP2.classList.add("fa-play");
    playbtnP2.classList.remove("fa-pause");
}

playerP2.ontimeupdate = function () {
    let ct = playerP2.currentTime;
    currentP2.innerHTML = timeFormat(ct);
    //progress
    let duration = playerP2.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Priscila3 */

var playerP3 = document.getElementById("playerP3");
let playbtnP3 = document.getElementById("playbtnP3");
var playpause = function () {
    if (playerP3.paused) {
        playerP3.play();
    } else {
        playerP3.pause();
    }
}

playbtnP3.addEventListener("click", playpause);

playerP3.onplay = function () {
    playbtnP3.classList.remove("fa-play");
    playbtnP3.classList.add("fa-pause");
}

playerP3.onpause = function () {
    playbtnP3.classList.add("fa-play");
    playbtnP3.classList.remove("fa-pause");
}

playerP3.ontimeupdate = function () {
    let ct = playerP3.currentTime;
    currentP3.innerHTML = timeFormat(ct);
    //progress
    let duration = playerP3.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Raissa */

var playerR = document.getElementById("playerR");
let playbtnR = document.getElementById("playbtnR");
var playpause = function () {
    if (playerR.paused) {
        playerR.play();
    } else {
        playerR.pause();
    }
}

playbtnR.addEventListener("click", playpause);

playerR.onplay = function () {
    playbtnR.classList.remove("fa-play");
    playbtnR.classList.add("fa-pause");
}

playerR.onpause = function () {
    playbtnR.classList.add("fa-play");
    playbtnR.classList.remove("fa-pause");
}

playerR.ontimeupdate = function () {
    let ct = playerR.currentTime;
    currentR.innerHTML = timeFormat(ct);
    //progress
    let duration = playerR.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Raissa 1 */

var playerR1 = document.getElementById("playerR1");
let playbtnR1 = document.getElementById("playbtnR1");
var playpause = function () {
    if (playerR1.paused) {
        playerR1.play();
    } else {
        playerR1.pause();
    }
}

playbtnR1.addEventListener("click", playpause);

playerR1.onplay = function () {
    playbtnR1.classList.remove("fa-play");
    playbtnR1.classList.add("fa-pause");
}

playerR1.onpause = function () {
    playbtnR1.classList.add("fa-play");
    playbtnR1.classList.remove("fa-pause");
}

playerR1.ontimeupdate = function () {
    let ct = playerR1.currentTime;
    currentR1.innerHTML = timeFormat(ct);
    //progress
    let duration = playerR1.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Raissa 2*/

var playerR2 = document.getElementById("playerR2");
let playbtnR2 = document.getElementById("playbtnR2");
var playpause = function () {
    if (playerR2.paused) {
        playerR2.play();
    } else {
        playerR2.pause();
    }
}

playbtnR2.addEventListener("click", playpause);

playerR.onplay = function () {
    playbtnR2.classList.remove("fa-play");
    playbtnR.classList.add("fa-pause");
}

playerR2.onpause = function () {
    playbtnR2.classList.add("fa-play");
    playbtnR2.classList.remove("fa-pause");
}

playerR2.ontimeupdate = function () {
    let ct = playerR2.currentTime;
    currentR2.innerHTML = timeFormat(ct);
    //progress
    let duration = playerR2.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Licia*/

var playerL = document.getElementById("playerL");
let playbtnL = document.getElementById("playbtnL");
var playpause = function () {
    if (playerL.paused) {
        playerL.play();
    } else {
        playerL.pause();
    }
}

playbtnL.addEventListener("click", playpause);

playerL.onplay = function () {
    playbtnL.classList.remove("fa-play");
    playbtnL.classList.add("fa-pause");
}

playerL.onpause = function () {
    playbtnL.classList.add("fa-play");
    playbtnL.classList.remove("fa-pause");
}

playerL.ontimeupdate = function () {
    let ct = playerL.currentTime;
    currentL.innerHTML = timeFormat(ct);
    //progress
    let duration = playerL.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Licia1*/

var playerL1 = document.getElementById("playerL1");
let playbtnL1 = document.getElementById("playbtnL1");
var playpause = function () {
    if (playerL1.paused) {
        playerL1.play();
    } else {
        playerL1.pause();
    }
}

playbtnL1.addEventListener("click", playpause);

playerL1.onplay = function () {
    playbtnL1.classList.remove("fa-play");
    playbtnL1.classList.add("fa-pause");
}

playerL1.onpause = function () {
    playbtnL1.classList.add("fa-play");
    playbtnL1.classList.remove("fa-pause");
}

playerL1.ontimeupdate = function () {
    let ct = playerL1.currentTime;
    currentL1.innerHTML = timeFormat(ct);
    //progress
    let duration = playerL1.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Polyana*/

var playerPy = document.getElementById("playerPy");
let playbtnPy = document.getElementById("playbtnPy");
var playpause = function () {
    if (playerPy.paused) {
        playerPy.play();
    } else {
        playerPy.pause();
    }
}

playbtnPy.addEventListener("click", playpause);

playerPy.onplay = function () {
    playbtnPy.classList.remove("fa-play");
    playbtnPy.classList.add("fa-pause");
}

playerPy.onpause = function () {
    playbtnPy.classList.add("fa-play");
    playbtnPy.classList.remove("fa-pause");
}

playerPy.ontimeupdate = function () {
    let ct = playerPy.currentTime;
    currentPy.innerHTML = timeFormat(ct);
    //progress
    let duration = playerPy.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

/* Polyana 1*/

var playerPy1 = document.getElementById("playerPy1");
let playbtnPy1 = document.getElementById("playbtnPy1");
var playpause = function () {
    if (playerPy1.paused) {
        playerPy1.play();
    } else {
        playerPy1.pause();
    }
}

playbtnPy1.addEventListener("click", playpause);

playerPy1.onplay = function () {
    playbtnPy1.classList.remove("fa-play");
    playbtnPy1.classList.add("fa-pause");
}

playerPy1.onpause = function () {
    playbtnPy1.classList.add("fa-play");
    playbtnPy1.classList.remove("fa-pause");
}

playerPy1.ontimeupdate = function () {
    let ct = playerPy1.currentTime;
    currentPy1.innerHTML = timeFormat(ct);
    //progress
    let duration = playerPy1.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}


let mensagem = document.querySelector(".mensagem") ;

// mostra a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
// esconde a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}
