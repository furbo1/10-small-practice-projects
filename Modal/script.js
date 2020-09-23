let open = document.getElementById('open')
let close = document.getElementById('close')
let popup = document.getElementById('popup')
let container = document.getElementById('container')




open.addEventListener('click', function() {
    popup.classList.add('active')
    container.classList.add('active')
    open.classList.add('active')
})

close.addEventListener('click', function() {

    popup.classList.remove('active')
    container.classList.remove('active')
    open.classList.remove('active')


})