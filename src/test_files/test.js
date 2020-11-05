const pinnedRepsSlider = document.querySelector('#slider')
const pinnedReps = document.querySelectorAll('.rep')

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")

const size = pinnedReps[0].clientWidth + 16;
let counter = 0

prevBtn.addEventListener('click', () => {
    if (counter >= 1) {
        counter--;
        pinnedRepsSlider.style.transform = 'translateX(' + (-size) * counter + 'px)';
    }
})

nextBtn.addEventListener('click', () => {
    if (counter < pinnedReps.length - 1) {
        counter++;    
        pinnedRepsSlider.style.transform = 'translateX(' + (-size) * counter + 'px)';
    }
})