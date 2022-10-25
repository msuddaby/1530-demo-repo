// Step 1: Defining Constants


// Step 2: Adding A Click Event
document.querySelector('.toggle-btn').addEventListener('click', () => {    
    document.querySelector('nav').classList.toggle('show-nav');
});            


document.querySelector('.hidebutton').addEventListener('click', () => {
    document.querySelector('#hide').classList.add('hide');
})