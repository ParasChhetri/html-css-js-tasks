const data = [
    {
        id: 0,
        question: "What is HTML?",
        answere: "HTML stands for HyperText Markup Language."
    },
    {
        id: 1,
        question: "What is CSS?",
        answere: "CSS stands for Cascading Style Sheets."
    },
    {
        id: 2,
        question: "What is JavaScript?",
        answere: "JavaScript is a programming language for the web."
    }
];

// this is to show the accordion data
const accordionWrapper = document.querySelector('.accordion');

function createDataAccordion() {
    accordionWrapper.innerHTML = data?.map(dataItem => `
        <div class="accordion_item" id="item-${dataItem.id}">
            <div class="accordion_title">
                <h3>${dataItem?.question}</h3>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="accordion_answere">
                <p>${dataItem?.answere}</p>
            </div>
        </div>
    `).join(" ")  // Convert array to a single string or else it will show comma at the end of every div     
}

createDataAccordion();

// this is used for closing the accordion when we click on accordion title
const getAllAccordionTitle = document.querySelectorAll('.accordion_title');

console.log(getAllAccordionTitle); // only to check what we are reciving as a title

// this will work as a toggle when we click on the title and add the active class and when we again click on the title it will remove the active class. This work in the random format one by one
getAllAccordionTitle.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if(currentItem.classList.contains('active')) {
            currentItem.classList.remove('active');
        }
        else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');
            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active')
            })
            currentItem.classList.add('active')
        }
    })
})
