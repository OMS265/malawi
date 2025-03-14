
// Get the search input and image container
const searchInput = document.getElementById('searchInput');
const imageContainer = document.getElementById('imageContainer');

// Add event listener to the search input field
searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.toLowerCase(); // Convert search input to lowercase

    // Get all image items
    const imageItems = imageContainer.getElementsByClassName('image-item');

    // Loop through all image items and check if they match the search query
    Array.from(imageItems).forEach(item => {
        const text = item.getAttribute('data-text').toLowerCase(); // Get text from data attribute (for easier search)
        
        // If text matches the search query, show the item, else hide it
        if (text.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});