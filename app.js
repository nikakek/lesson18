function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours.toString().padStart(2, '0') + ':' + 
                     minutes.toString().padStart(2, '0') + ':' + 
                     seconds.toString().padStart(2, '0') + ' PM';
    document.getElementById('clock').innerHTML = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);



  function mainSlider() {
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const indicators = document.querySelectorAll(".indicator");
    const circles = document.querySelectorAll('.circle');
    const images = document.querySelectorAll('.hidden');
    
    let slideIntervalId = null;
    let activeIndex = 0;
  
    function renderSlides() {
      slides.forEach((el, i) => {
        if (i === activeIndex) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
      renderIndicators();
      renderCircles();
    }
  
    function renderIndicators() {
      indicators.forEach((el, i) => {
        if (i === activeIndex) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    }
    
    function renderCircles() {
      circles.forEach((circle, i) => {
        if (i === activeIndex) {
          circle.style.backgroundColor = "black";
        } else {
          circle.style.backgroundColor = "white";
        }
      });
    }
    
    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
      });
    }
    
    function hideImages() {
      images.forEach((image) => {
        image.classList.remove("active");
      });
    }
  
    function nextFn() {
      if (activeIndex === slides.length - 1) {
        activeIndex = 0;
      } else {
        activeIndex++;
      }
      renderSlides();
      hideImages();
      showImage(activeIndex);
    }
  
    function prevFn() {
      if (activeIndex === 0) {
        activeIndex = slides.length - 1;
      } else {
        activeIndex--;
      }
      renderSlides();
      hideImages();
      showImage(activeIndex);
    }
  
    next.addEventListener("click", nextFn);
    prev.addEventListener("click", prevFn);
  
    function startSlideInterval() {
      slideIntervalId = setInterval(nextFn, 5000);
    }
  
    function stopSlideInterval() {
      clearInterval(slideIntervalId);
    }
  
    function handleSlideInterval() {
      stopSlideInterval();
      startSlideInterval();
    }
  
    startSlideInterval();
    renderSlides();
    showImage(activeIndex);
  
    slides.forEach((slide) => {
      slide.addEventListener("mouseenter", stopSlideInterval);
      slide.addEventListener("mouseleave", startSlideInterval);
    });
  
    document.addEventListener("keyup", (e) => {
      if (e.code === "ArrowRight") {
        nextFn();
        handleSlideInterval();
      }
      if (e.code === "ArrowLeft") {
        prevFn();
        handleSlideInterval();
      }
    });
  
    indicators.forEach((indicator, i) => {
      indicator.addEventListener("click", () => {
        activeIndex = i;
        renderSlides();
        hideImages();
        showImage(activeIndex);
        handleSlideInterval();
      });
    });
    
    circles.forEach((circle, i) => {
      circle.addEventListener("click", () => {
        activeIndex = i;
        renderSlides();
        hideImages();
        showImage(activeIndex);
        handleSlideInterval();
      });
    });
  }
  
  mainSlider();