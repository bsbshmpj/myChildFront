const allAgree = document.getElementById('check0');
const agree1 = document.getElementById('check1');
const agree2 = document.getElementById('check2');

const $nextBtn = document.querySelector(".agree-next-btn");


allAgree_checked = () => {
    let allAgreeisChecked = allAgree.checked;
    if(allAgreeisChecked){
        agree1.checked = true;
        agree2.checked = true;
    } else {
        agree1.checked = false;
        agree2.checked = false;
    }
}

is_checked = () => {
    if(allAgree.checked || (agree1.checked && agree2.checked)){
        $nextBtn.style.background = `rgb(163, 220, 255)`
    } else {
        $nextBtn.style.background = `rgb(197, 197, 197)`
    }
}