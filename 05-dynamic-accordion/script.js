const accordionTitle = [
    "What is Macbook Air m1 current price?",
    "What is EMI?",
];

const accordionDescription = [
    "Near about 67,000₹",
    "EMI stands for Equated Monthly Installment. It's a fixed amount of money paid to a lender each month to repay a loan. EMIs are a key part of repaying loans over time.",
];

function loadItem() {
    accordionTitle.map((t,i) => {
        createItem(t, accordionDescription[i]);
    });
}

loadItem();

function addItem() {
    const title = document.getElementById('accordion-title').value;
    const description = document.getElementById('accordion-description').value;
    if(!title) {
        window.alert('Title missing!')
    }else if (!description) {
        window.alert('Description missing!')
    }else {
        createItem(title, description)
    }
}

function createItem(title, description) {
    // Create title container
    const heading = document.createElement('div');
    heading.classList.add('accordion-title');
    heading.innerText = title;

    // Add Font Awesome icon
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-plus', 'icon-style'); // Initially a plus icon
    heading.appendChild(icon);

    // Description container
    const accordion_description = document.createElement('div');
    accordion_description.classList.add('accordion-description');
    accordion_description.style.display = 'none'; // Hide by default

    const paragraph = document.createElement('p');
    paragraph.innerText = description;
    accordion_description.appendChild(paragraph);

    // Create accordion item
    const item = document.createElement('div');
    item.classList.add('accordion-item');

    // Toggle accordion on click
    heading.addEventListener('click', () => {
        accordion_description.classList.toggle('active');

        if (accordion_description.style.display === 'block') {
            accordion_description.style.display = 'none';
            icon.classList.replace('fa-minus', 'fa-plus'); // Change to plus
        } else {
            accordion_description.style.display = 'block';
            icon.classList.replace('fa-plus', 'fa-minus'); // Change to minus
        }
    });

    // Append elements
    item.appendChild(heading);
    item.appendChild(accordion_description);
    document.getElementById('menu').appendChild(item);
}
