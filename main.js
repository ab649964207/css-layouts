var currentPageIndex = 1;
var targetPageIndex;
var animating = false;
var maxPage = 5;
var menuitem = document.querySelectorAll('.menuitem')

menuitem = Array.prototype.slice.call(menuitem)
for (let i = 0; i < menuitem.length; i++) {
    menuitem[i].addEventListener('click', (e) => {
        e.preventDefault()
        targetPageIndex = i + 1;
        gotoPageAndChangeActive(targetPageIndex)
    })
}



menuIcon.addEventListener('click', (e) => {
    menu.classList.add('active')
    closeIcon.classList.add('active')
    menuIcon.classList.remove('active')
})
closeIcon.addEventListener('click', (e) => {
    menu.classList.remove('active')
    closeIcon.classList.remove('active')
    menuIcon.classList.add('active')
})



document.addEventListener('wheel',(e)=>{
     targetPageIndex = currentPageIndex + (e.wheelDelta > 0 ? -1:1)
    gotoPageAndChangeActive(targetPageIndex)
})
window.addEventListener('keydown',(e)=>{
    if (e.key === 'ArrowDown') {
        targetPageIndex = currentPageIndex + 1 
        gotoPageAndChangeActive(targetPageIndex)
    }
    if (e.key === 'ArrowUp') {
        targetPageIndex = currentPageIndex - 1
        gotoPageAndChangeActive(targetPageIndex)
    }
   
})


function goToPage(targetPageIndex) {
    return new Promise(
        (resolve, reject)=>{
        if (animating) {
            reject()
        }else if (targetPageIndex < 1){
            reject()
        }else if (targetPageIndex > maxPage){
            reject()
        }else{
            animating = true
            setTimeout(() => {
                animating = false
            }, 1000);
            main.className = `main state${targetPageIndex}`
            resolve();
        }
    }
    )
}
function gotoPageAndChangeActive(targetPageIndex) {

    goToPage(targetPageIndex).then(() => {
        menuitem[currentPageIndex - 1].classList.remove('active')
        currentPageIndex = targetPageIndex
        menuitem[currentPageIndex - 1].classList.add('active')
    }, () => {})
}

