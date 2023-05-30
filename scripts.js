const lastone = document.querySelector('.last-one')

const myObserver = new IntersectionObserver((entries) => {
    console.log(entries)
})


myObserver.observe(lastone)