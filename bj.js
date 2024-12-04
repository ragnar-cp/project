 let currentIndex = 0;
      const reviews = document.querySelectorAll('.review-item');
      const nextButton = document.querySelector('.next-btn');
      const prevButton = document.querySelector('.prev-btn');
  
      function showReview(index) {
        reviews.forEach((review, i) => {
          review.style.display = (i === index) ? 'block' : 'none';
        });
      }
  
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
      });
  
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
      });
  
      showReview(currentIndex);
