// JavaScript for carousel functionality
window.onload = function() {
    const carousel = document.querySelector('.carousel');
    
    function scrollCarousel() {
      carousel.scrollLeft += carousel.clientWidth;
      // If reaching the end, scroll back to the beginning
      if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
        carousel.scrollLeft = 0;
      }
    }
    
    // Automatically scroll the carousel every 1 second
    setInterval(scrollCarousel, 1000);
  };
  