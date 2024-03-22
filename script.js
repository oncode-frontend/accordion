const wrapperElem = document.querySelectorAll(".wrapper")
const contentsElem = document.querySelectorAll(".content")
const icon = document.querySelectorAll(".icon")
const togglesElem = document.querySelectorAll(".toggle")

let contentElem, toggleElem, iconElem;

const closeAllTabs = () => {
    for (let i = 0; i < contentsElem.length; i++) {
        contentsElem[i].style.height = "0px"
        togglesElem[i].style.color = "#111130"
        icon[i].classList.remove("fa-minus")
        icon[i].classList.add("fa-plus")

    }
} 
wrapperElem.forEach(we => {
    we.addEventListener('click', (ev) => {
        closeAllTabs()
        contentElem = we.querySelector('.content')
        toggleElem = we.querySelector('.toggle')
        iconElem = we.querySelector('.icon')

        contentElem.style.height = contentElem.scrollHeight + 'px'
        toggleElem.style.color = "#0084e9"
        iconElem.classList.add("fa-minus")
        iconElem.classList.remove("fa-plus")
    })
})
