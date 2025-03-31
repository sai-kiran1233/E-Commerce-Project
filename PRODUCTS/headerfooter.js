document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert header
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error fetching header:', error));
  
    // Fetch and insert footer
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error fetching footer:', error));
  });
  
  window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var sticky = header.offsetTop;
  
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
  });
  
  
    // to add functionality to the product slider
      const wrapper = document.querySelector(".wrapper");
      const carousel = document.querySelector(".carousel");
      const firstCardWidth = carousel.querySelector(".card").offsetWidth;
      const arrowBtns = document.querySelectorAll(".wrapper i");
  
      let isDragging = false;
      let startX;
      let startScrollLeft;
  
  // Add event listeners for the arrow buttons to scroll the carousel left and right
      arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          carousel.scrollLeft +=
            btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
      });
  
      const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };
  
        const dragging = (e) => {
          if (!isDragging) return; // if isDragging is false return from here
          // Updates the scroll position of the carousel based on the cursor movement
          carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      };
  
        const dragStop = () => {
          isDragging = false;
          carousel.classList.remove("dragging");
      };
  
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop); 