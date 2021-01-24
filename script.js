const containerImg = document.getElementById('container-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


function nextImg100() {
    containerImg.style.left = '-50%';
     
    nextImg150();
}

function nextImg150() {

    nextBtn.addEventListener('click', function(){
        containerImg.style.left = '-100%';
    });
}


function prevImg() {
    containerImg.style.left = '0px';

}


nextBtn.addEventListener('click', nextImg100);

prevBtn.addEventListener('click', prevImg);
