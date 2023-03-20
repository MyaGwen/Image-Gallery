//! all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

//! selected div
const selectedDiv = document.querySelector('.selected');

//! hidden div
const hiddenDiv = document.querySelector('.hidden');

//! click event listener for each item
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    //! clicked image source
    const clickedSrc = item.src;

    //! Change the image source in the selected div
    selectedDiv.innerHTML = `<img src="${clickedSrc}" alt="Selected Image">`;
  });
 
});
