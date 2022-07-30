ToyProject 01
==============
## 가위바위보 게임 ##

![picture alt](https://shape2ee.github.io/RockScissorPaper/images/gameplay.gif "가위바위보 게임")

토이프로젝트로 JavaScript를 공부하는 차원에서 만든 가위바위보 게임입니다.

**URL**
- [가위바위보 게임 바로가기](https://shape2ee.github.io/RockScissorPaper/)


**SKILL**

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>


### 느낀점 & 힘들었던 점 ###
- `Math.trunc()`와 `Math.random()`을 이용하여 컴퓨터가 가위, 바위, 보자기 중에 하나를 선택 할 수 있게 하였고 콜백함수들을 이용하면서 함수들끼리의 실행 순서에대해 좀 더 자세하게 알 수 있었습니다.

- 모달창으로 게임 설명서를 작업하여 매번 계속해서 설명서가 보여지는것은 사용자의 경험에 좋지 않은 것 같아 '하루동안 보지 않기'를 쿠키를 이용하여 넣어보았는데 쿠키에 대해 작성방법은 이해를 하였지만, 쿠키를 가져오는 방법의 [정규표현식](https://ko.javascript.info/regular-expressions)에 대해서는 아직 정확하게 이해하지 못해서 공부가 더 필요하다고 느꼈습니다.

### 주요 코드 ###
```js
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

function randomImg () {
  const randomNum = Math.trunc(Math.random() * 3);

  yourImg.style.backgroundImage = imglist[randomNum].url;
  yourImgText.textContent = imglist[randomNum].name;

  randomIndex = randomNum;

  compareSelect()
}
```

`Math.random()`는 0이상 1미만의 부동소숫점의 난수를 만드는 함수이기때문에 여기에 3을 곱하여 1미만이 아니라 3 미만의 숫자를 만들었고, `Math.trunc()` 함수를 이용하여 정수부분만 반환하여 배열인덱스 번호로 넣어 이미지를 불러오도록 하였습니다.


```js
function setCookie(name, value, expires) {
  let now = new Date(Date.now() + (expires*24*60*60*1000));
  // now = now.getDate() + expires;
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/; expires=" + now.toUTCString();
}
```

쿠키를 설정하는 함수를 만들었는데 `setCookie()`에 이름과 값과 유효기간을 입력하면 쿠키에 저장이 되도록 하였습니다.

