document.addEventListener('DOMContentLoaded', function() {
    const cars = document.querySelectorAll('.car');
  
    function handleScroll() {
      cars.forEach(car => {
        const carRect = car.getBoundingClientRect();
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isVisible = carRect.top < windowHeight * 0.8 && carRect.bottom > windowHeight * 0.2;
        const carCenter = carRect.left + carRect.width / 2;
  
        if (isVisible && !car.classList.contains('appeared')) {
          car.classList.add('appeared');
  
          if (carCenter > windowWidth / 2) {
            car.classList.add('appear-right');
          } else if (carCenter < windowWidth / 2) {
            car.classList.add('appear-left');
          } else {
            car.classList.add('appear-bottom');
          }
        }
      });
    }
  
    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);
  
    // Trigger handleScroll on initial load and resize
    handleScroll();
    window.addEventListener('resize', handleScroll);
  });