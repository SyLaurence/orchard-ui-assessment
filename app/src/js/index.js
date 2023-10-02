
// Modal div element
const modalDiv = document.getElementById('modal')

// Modal img element
const modalImg = document.getElementById('modal-img')


/**
 * Reusable Image modal
 * Shows the image modal by removing the 'hidden' class
 * 
 * @param {string} src 
 */
function showModal(src) {
    modalImg.src = src;
    modalDiv.classList.remove('hidden')
}

/**
 * Hides the image modal by adding a 'hidden' classs
 * 
 */
function hideModal() {
    modalDiv.classList.add('hidden')
}

// Get all the links from the All the Latest Section
const links = document.getElementsByClassName('read-more')

// Add a Click event to each link element from All the Latest Section and Log the data-value
Array.from(links).map( (linkElement) => {
    linkElement.addEventListener('click', (e) => console.log(e.target.getAttribute('data-value')))
})