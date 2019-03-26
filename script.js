// only scripts that do not rely on styling in here

// Class Toggling Function
// Pass in the element to toggle the class on and the class to toggle
function toggleClass(elem, cls) {
  elem.classList.toggle(cls);
}

// Slideshow function
// Required the class of slide show on each of the images
function slideshow() {
  let slideGroup = document.querySelectorAll(".slideshow-container");
  for (let index = 0; index < slideGroup.length; ++index) {
    let thisEl = slideGroup[index].querySelectorAll(
      ".slideshow-container .slideshow"
    );
    let i = 1;
    let previous = 0;
    let current = 0;

    setInterval(function() {
      // We're using set interval as we want to keep looping over them
      if (i === 0) {
        previous = thisEl.length - 1; // Handle the switch back to the start (0 -1 wont exist) so zero base the number of elements
      } else {
        previous = i - 1;
      }
      current = i;
      toggleClass(thisEl[current], "slideshow-visible");
      toggleClass(thisEl[previous], "slideshow-visible");

      i = (i + 1) % thisEl.length; // reset the counter
      console.log(i);
    }, 5000);
  }
}
document.addEventListener("DOMContentLoaded", function() {
  slideshow();
});
