
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
function showModal(src) {
    modalImg.src = src
    disableScroll()
    modalDiv.classList.remove('hidden')
}

/**
 * Hides the image modal by adding a 'hidden' classs
 * Enables scroll on body
 * 
 */
function hideModal() {
    enableScroll() 
    modalDiv.classList.add('hidden')
}


/**
 * Disable page scrolling by setting scroll values to current value (unchanged) on scroll event
 * 
 */
function disableScroll() {
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
function enableScroll() {
    window.onscroll = function() {}
}


// Get all the links from the All the Latest Section
const links = document.getElementsByClassName('read-more')

// Add a Click event to each link element from All the Latest Section and Log the data-value
Array.from(links).map( (linkElement) => {
    linkElement.addEventListener('click', (e) => console.log(e.target.getAttribute('data-value')))
})