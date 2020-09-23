let open = document.getElementById('open')
let close = document.getElementById('close')
let list = document.getElementById('list')



open.addEventListener('click', function() {
    list.classList.toggle('active')
    open.classList.toggle('active')
    close.classList.toggle('active')

})

close.addEventListener('click', function() {
    list.classList.toggle('active')
    open.classList.toggle('active')
    close.classList.toggle('active')

})