// Scroll
var sliderContainer = document.querySelector('.slider-container');
var images = document.querySelectorAll('.slider-container img');
var currentIndex = 0;
var scrollAllowed = true;

function handleScroll(event) {
  if (!scrollAllowed) return;
  
  scrollAllowed = false;
  
  if (event.deltaY > 0) {
    // Scroll down, slide to next image
    currentIndex++;
    if (currentIndex === images.length) {
      currentIndex = 0;
    }
  } else {
    // Scroll up, slide to previous image
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
  }
  
  sliderContainer.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
  
  setTimeout(function() {
    scrollAllowed = true;
  }, 1000); // Set a timeout to prevent rapid scrolling triggering multiple slides
}

window.addEventListener('wheel', handleScroll);
// Scroll End 

// Class Change 

var sliderItems = document.querySelectorAll('.slider-item');

function handleClick(event) {
  // Remove active class from all slider items
  sliderItems.forEach(function(item) {
    item.classList.remove('active');
  });
  
  // Add active class to the clicked slider item
  event.currentTarget.classList.add('active');
}

sliderItems.forEach(function(item) {
  item.addEventListener('click', handleClick);
});

// End Class Change 