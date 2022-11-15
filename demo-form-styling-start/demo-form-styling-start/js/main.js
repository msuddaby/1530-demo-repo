// document.querySelector('.toggle-btn').addEventListener('click', () => {
//     document.querySelector('nav').classList.toggle('show-nav');
// });

var item = document.querySelector('#bruh');
let move = 40;



document.querySelector('#bruh').addEventListener('mouseover', () => {
    move += 40;
    item.style.left = `${move}px`;
    item.style.bottom = `${move}px`;
})