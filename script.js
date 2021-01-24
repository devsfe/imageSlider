const containerImg = document.getElementById('container-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

currentPosition = 0;

// prev img
prevBtn.addEventListener('click', function() {
    if(currentPosition == 2) {
        containerImg.style.left = '-50%';
        currentPosition = 1;
    } else if (currentPosition == 1) {
        containerImg.style.left = '0px';
        currentPosition = 0;    
    }
});

// next img
nextBtn.addEventListener('click', function() {
    if(currentPosition == 0) {
        containerImg.style.left = '-50%';
        currentPosition++       
    } else if (currentPosition == 1) {
        containerImg.style.left = '-95%';  
        currentPosition++  
    }
});
