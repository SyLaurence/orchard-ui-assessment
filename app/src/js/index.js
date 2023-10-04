
// Modal div element
const modalDiv = document.getElementById('modal')

// Modal img element
const modalImg = document.getElementById('modal-img')

/**
 * Reusable Image modal
 * Shows the image modal by removing the 'hidden' class
 * Disables scroll on body
 * 
 * @param {string} src 
 */
const showModal = (src) => {
    modalImg.src = src
    disableScroll()
    modalDiv.classList.remove('hidden')
}

/**
 * Hides the image modal by adding a 'hidden' classs
 * Enables scroll on body
 * 
 */
const hideModal = () => {
    enableScroll() 
    modalDiv.classList.add('hidden')
}


/**
 * Disable page scrolling by setting scroll values to current value (unchanged) on scroll event
 * 
 */
const disableScroll = () => {
    // Get the current page scroll position
    scrollTop = document.documentElement.scrollTop
    scrollLeft = document.documentElement.scrollLeft,
  
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop)
        };
}
  
/**
 * Enable page scrolling
 * 
 */
const enableScroll = () => {
    window.onscroll = function() {}
}

// Add close functionality for the modal
const closeIcon = document.getElementById('close-modal')
closeIcon.addEventListener('click', hideModal)

// Get all image elements
const imagesWithModal = document.getElementsByClassName('img-w-modal')

// Add a Click event to each Image element that will show a modal on Click
Array.from(imagesWithModal).map( (imgElement) => {
    imgElement.addEventListener('click', (e) => showModal(e.target.getAttribute('data-img')))
} )


// Get all the links from the All the Latest Section
const links = document.getElementsByClassName('read-more')

// Add a Click event to each link element from All the Latest Section and Log the data-value
Array.from(links).map( (linkElement) => {
    linkElement.addEventListener('click', (e) => console.log(e.target.getAttribute('data-value')))
})