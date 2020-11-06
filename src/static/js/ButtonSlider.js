const pinnedRepsSlider = document.querySelector('#slider')
const pinnedReps = document.querySelectorAll('.rep')

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")

var size = 216
if (pinnedReps[0]) {
    size = pinnedReps[0].clientWidth + 16;
}
let counter = 0

if (pinnedRepsSlider) {
    console.log("It worked")
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
}

export {pinnedReps, pinnedRepsSlider, nextBtn, prevBtn}