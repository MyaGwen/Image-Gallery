// Get all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Get the selected div
const selectedDiv = document.querySelector('.selected');

// Get the hidden div
const hiddenDiv = document.querySelector('.hidden');

// Add a click event listener to each item
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the clicked image source
    const clickedSrc = item.src;

    // Change the image source in the selected div
    selectedDiv.innerHTML = `<img src="${clickedSrc}" alt="Selected Image">`;
  });

   // //  // Show the hidden div
   // // selectedDiv.classList.remove('hidden');
 
});
