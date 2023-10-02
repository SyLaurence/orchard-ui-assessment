
// Get all the links from the All the Latest Section
const links = document.getElementsByClassName('read-more')

// Add a Click event to each link element from All the Latest Section and Log the data-value
Array.from(links).map( (linkElement) => {
    linkElement.addEventListener('click', (e) => console.log(e.target.getAttribute('data-value')))
})