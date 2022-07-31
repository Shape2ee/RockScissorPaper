const scissors = document.querySelector('.game_scissors');
const rock = document.querySelector('.game__rock');
const paper = document.querySelector('.game__paper');
let selectIndex = 0;
let randomIndex = 0;

const imglist = [
  {
    name : "scissors",
    url : "url(./images/scissors.svg)"
  },
  {
    name : "rock",
    url : "url(./images/rock.svg)"
  },
  {
    name : "paper",
    url : "url(./images/paper.svg)"
  }
]

const myImg = document.querySelector(".game__item--my .game__img");
const yourImg = document.querySelector(".game__item--your .game__img");

const myImgText = document.querySelector(".game__item--my .game__txt");
const yourImgText = document.querySelector(".game__item--your .game__txt");

const myPoint = document.querySelector(".game__point--my");
const yourPoint = document.querySelector(".game__point--your");

const resetBtn = document.querySelector(".game__reset");
let result = false;

document.cookie = "test1=Hello";

const gameStart = (e) => {
  const target = e.target;

  resetImg();
  
  setTimeout( () => {
    switch(target.textContent) {
      case "가위" :
        myImg.style.backgroundImage = imglist[0].url
        myImgText.textContent = imglist[0].name
        selectIndex = 0;
        break;
      case "바위" :  
        myImg.style.backgroundImage = imglist[1].url
        myImgText.textContent = imglist[1].name
        selectIndex = 1;
        break;
      case "보" :  
        myImg.style.backgroundImage = imglist[2].url
        myImgText.textContent = imglist[2].name
        selectIndex = 2;
        break;
    }
  }, 100);

  setTimeout(randomImg, 300);
}

function compareSelect () {
  if(selectIndex === 0 && randomIndex === 2 || 
    selectIndex === 1 && randomIndex === 0 || 
    selectIndex === 2 && randomIndex === 1) {
    myPoint.textContent = Number(myPoint.textContent) + 1;
    
  } else if(selectIndex === 0 && randomIndex === 1 || 
    selectIndex === 1 && randomIndex === 2 || 
    selectIndex === 2 && randomIndex === 0) {
    yourPoint.textContent = Number(yourPoint.textContent) + 1;
  }

  gameOver()
}

function randomImg () {
  const randomNum = Math.trunc(Math.random() * 3);

  yourImg.style.backgroundImage = imglist[randomNum].url;
  yourImgText.textContent = imglist[randomNum].name;

  randomIndex = randomNum;

  compareSelect()
}

function resetImg() {
  myImg.style.backgroundImage = "none";
  myImgText.textContent = "";

  yourImg.style.backgroundImage = "none"
  yourImgText.textContent = "";

  if(result === false) {
    scissors.addEventListener("click", gameStart);
    rock.addEventListener("click", gameStart);
    paper.addEventListener("click", gameStart);
  }
}

function gameOver() {
  if(myPoint.textContent == "10") {
    result = confirm("WIN! 대단해요👍 가위바위보의 달인이시군요😎");
    reGame()
  } else if (yourPoint.textContent == "10") {
    result = confirm("LOSE! 아쉬워요😭 다시한번 도전해봐요!👍");
    reGame()
  }
}

function reGame() {
  if(result) {
    myImg.style.backgroundImage = "none";
    myImgText.textContent = "";
  
    yourImg.style.backgroundImage = "none"
    yourImgText.textContent = "";
    
    myPoint.textContent = 0;
    yourPoint.textContent = 0;
  } else {
    scissors.removeEventListener("click", gameStart);
    rock.removeEventListener("click", gameStart);
    paper.removeEventListener("click", gameStart);
  }
}

scissors.addEventListener("click", gameStart);
rock.addEventListener("click", gameStart);
paper.addEventListener("click", gameStart);

resetBtn.addEventListener("click", () => {
  myPoint.textContent = 0;
  yourPoint.textContent = 0;

  resetImg();
})



/*-------------------------------------------------*/
// 모달창

const modal = document.querySelector(".modal");
const startBtn = document.querySelector(".madal_btn");
const closeBtn = document.querySelector(".close_btn");
const modalForm = document.forms.check;
const chcekBox = document.querySelector("#checkbox");
let checkBoolean = false;

const modalClose = () => {
  modal.classList.remove("show")
  // setCookie("close", true, 1);
}

// 쿠키설정
function setCookie(name, value, expires) {
  let now = new Date(Date.now() + (expires*24*60*60*1000));
  // now = now.getDate() + expires;
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/; expires=" + now.toUTCString();
}

// 쿠키 가져오기
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

chcekBox.addEventListener("change", (e) => {
  checkBoolean = e.target.checked;
})

closeBtn.addEventListener("click", modalClose)
startBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if(checkBoolean) {
    modalClose();
    setCookie("close", true, 1);
  } else {
    modalClose();
  }
})

if(getCookie("close") === undefined) {
  modal.classList.add("show");
}
