var currentPageIndex = 1;
var targetPageIndex;
var animating = false;
var maxPage = 4;
document.addEventListener('wheel',(e)=>{
    var targetPageIndex = currentPageIndex + (e.wheelDelta > 0 ? -1:1)
    console.log(targetPageIndex);
    
    goToPage(targetPageIndex).then(()=>{
            currentPageIndex = targetPageIndex ;
        })

})

function goToPage(targetPageIndex) {
    return new Promise(
        (resolve, reject)=>{
        if (animating) {
            reject()
        }else if (targetPageIndex < 0){
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

