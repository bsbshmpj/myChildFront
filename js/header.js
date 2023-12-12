const textColor = ["#63da53", "#ff748b", "#ffc400", "#dbdbdb"];
const menuArr = document.querySelectorAll(".menuText");
const $menuWrap = document.querySelector("menuTitleWrap");

const toggleArr = document.querySelectorAll(".raiseToggle");
const $raiseBtn = document.querySelector(".raiseBtn");

// 메뉴
const clickMenu = (index) => {
  for (let i = 0; i < menuArr.length; i++) {
    if (i == index) {
      menuArr[i].style.color = textColor[i];
      // 같이키우기 누르면 토글 생성
      if (i == 2) {
        toggleArr[0].style.display = `block`;
      } else {
        toggleArr[0].style.display = `none`;
        toggleArr[1].style.display = `none`;
      }
    } else {
      menuArr[i].style.color = textColor[3];
    }
  }
};

const touchMenu = (index) => {
  for (let i = 0; i < menuArr.length; i++) {
    if (i == index) {
      menuArr[i].style.color = textColor[i];
    } else {
      menuArr[i].style.color = textColor[3];
    }
  }
};

const leaveMouse = (index) => {
  menuArr[index].style.color = textColor[3];
};


for (let i = 0; i < 3; i++) {
  menuArr[i].onmouseout = function () {
    leaveMouse(i);
  };

  menuArr[i].onmouseover = function () {
    touchMenu(i);
  };
  menuArr[i].onclick = function () {
    clickMenu(i);
  };
}

// 토글 제어
const clickToggle = (index) => {
  for (let i = 0; i < toggleArr.length; i++) {
    if (i == index) {
      toggleArr[i].style.display = `none`;
    } else {
      toggleArr[i].style.display = `block`;
    }
  }
};

for (let i = 0; i < 2; i++) {
  toggleArr[i].onclick = function () {
    clickToggle(i);
  };
}
