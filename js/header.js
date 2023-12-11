const $menuWrap = document.querySelector(".menuWrap")
const $menuBtnWrap = document.querySelector(".menuBtnWrap");

const menuTitleArr = document.querySelectorAll(".menuTitleWrap > .menuText");
const menuBtnArr = document.querySelectorAll(".menuBtnWrap > .menuText");

// 메뉴 축소
const menuUp = () => {
    $menuBtnWrap.classList.remove('slideMenuDown');
    $menuBtnWrap.classList.add('slideMenuUp');
};

// 메뉴 확장
const menuDown = () => {
    $menuBtnWrap.classList.remove('slideMenuUp');
    $menuBtnWrap.classList.add('slideMenuDown');
};

// 화면 이동 
const clickMenuBtn = (index) => {
    for(let i=0; i<3; i++){
        if(i == index){
            menuTitleArr[i].style.display = `block`;
        } else {
            menuTitleArr[i].style.display = `none`;
        }
    }
}

$menuWrap.addEventListener("mouseout", menuUp);
$menuWrap.addEventListener("mouseover", menuDown);

for(let i=0; i<3; i++){
    menuBtnArr[i].onclick = function() {
        clickMenuBtn(i);
    }
}