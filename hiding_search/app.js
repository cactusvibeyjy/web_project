const search = document.querySelector('.search')
const btn = document.querySelector('button')
const input = document.querySelector('input')
btn.addEventListener('click', function(){
    search.classList.toggle('active')
    input.focus()
})