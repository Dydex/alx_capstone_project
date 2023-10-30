const header = document.querySelector('header');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
})

const clip = document.querySelectorAll('.clip');
for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('mouseenter',
        function (e) {
            clip[i].play()
        })
    clip[i].addEventListener('mouseout',
        function (e) {
            clip[i].pause()
        })
}
