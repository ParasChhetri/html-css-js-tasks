const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item,index) => {
    let header = item.querySelector('header');
    header.addEventListener('click', () => {
        item.classList.toggle('is-open');
        let answere = item.querySelector('.accordion-answere');
        if(item.classList.contains('is-open')){
            item.querySelector('i').classList.replace('fa-plus','fa-minus');
            answere.style.height = `${answere.scrollHeight}px`
        }
        else {
            item.querySelector('i').classList.replace('fa-minus','fa-plus');
            answere.style.height = '0px';
        }
        removeOpenedContent(index);
    })
})

function removeOpenedContent(index) {
    accordionContent.forEach((item2,index2) => {
        if(index != index2){
            item2.classList.remove('is-open');
            let ans = item2.querySelector('.accordion-answere');
            item2.querySelector('i').classList.replace('fa-minus','fa-plus');
            ans.style.height = '0px';
        }
    })
}
