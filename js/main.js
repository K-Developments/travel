'use strict';

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 2500);
});



document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation elements
  const navTogglers = document.querySelectorAll('[data-nav-toggler]');
  const navbar = document.querySelector('[data-navbar]');
  const overlay = document.querySelector('[data-overlay]');
  const navbarLinks = document.querySelectorAll('.navbar-link');

  const toggleNav = () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
  };

  const closeNav = () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('nav-active');
  };

  navTogglers.forEach(toggler => {
    toggler.addEventListener('click', toggleNav);
  });

  navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbarLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      closeNav();
    });
  });

  // Header & Topbar scroll behavior
  const header = document.querySelector('[data-header]');
  const topbar = document.querySelector('.topbar');
  let lastScrollPos = 0;

  window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos <= 0) {
      header.classList.remove('header-hide');
      topbar?.classList.remove('hide-topbar');
    }

    if (currentScrollPos > 100) {
      header.classList.add('header-active');

      if (currentScrollPos > lastScrollPos) {
        // Scrolling down
        header.classList.add('header-hide');
        topbar?.classList.add('hide-topbar');
      } else {
        // Scrolling up
        header.classList.remove('header-hide');
        topbar?.classList.remove('hide-topbar');
      }
    } else {
      header.classList.remove('header-active', 'header-hide');
      topbar?.classList.remove('hide-topbar');
    }

    lastScrollPos = currentScrollPos;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const sliderItems = document.querySelectorAll('[data-hero-slider-item]');
  const nextBtn = document.querySelector('[data-next-btn]');
  const prevBtn = document.querySelector('[data-prev-btn]');

  let currentIndex = 0;
  const totalSlides = sliderItems.length;

  function showSlide(index) {
    sliderItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 7000);
});


/**about page */

  document.addEventListener('DOMContentLoaded', function() {
      const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30
           
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      });
    });

    /**packages  page*/

 // Packages page modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Package Filter Functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const packageCards = document.querySelectorAll('.package-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      packageCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Package Modal Functionality
  const viewDetailButtons = document.querySelectorAll('.view-details');
  const packageModals = document.querySelectorAll('.package-modal');
  const closeModalButtons = document.querySelectorAll('.modal-close');

  viewDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const packageId = button.getAttribute('data-package');
      const modal = document.getElementById(`${packageId}-modal`);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.package-modal');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Close modal when clicking outside
  packageModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      packageModals.forEach(modal => {
        if (modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
});


   
    
    const whatsappBtn = document.querySelector('.whatsapp-btn');
      window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        whatsappBtn.style.opacity = '1';
        whatsappBtn.style.visibility = 'visible';
        whatsappBtn.style.transform = 'translateY(0)';
      } else {
        whatsappBtn.style.opacity = '0';
        whatsappBtn.style.visibility = 'hidden';
        whatsappBtn.style.transform = 'translateY(5rem)';
      }
    });

    const trip = document.querySelector('.tripadvisor-btn');
     window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
       trip.style.opacity = '1';
        trip.style.visibility = 'visible';
        trip.style.transform = 'translateY(0)';
      } else {
        trip.style.opacity = '0';
        trip.style.visibility = 'hidden';
        trip.style.transform = 'translateY(8rem)';
      }
    });


       // Back to Top Button
    const backTopBtn = document.querySelector('.back-top-btn');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backTopBtn.style.opacity = '1';
        backTopBtn.style.visibility = 'visible';
        backTopBtn.style.transform = 'translateY(0)';
      } else {
        backTopBtn.style.opacity = '0';
        backTopBtn.style.visibility = 'hidden';
        backTopBtn.style.transform = 'translateY(2rem)';
      }
    });

    backTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

/**gradient top */

document.addEventListener('DOMContentLoaded', function() {
  const topGradient = document.getElementById('top-gradient');
  let lastScrollPosition = 0;
  let ticking = false;

  window.addEventListener('scroll', function() {
    lastScrollPosition = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll(lastScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  });

  function handleScroll(scrollPos) {
    if (scrollPos <= 0) {
      // At the top - show gradient
      topGradient.classList.remove('hide');
    } else {
      // Scrolled down - hide gradient
      topGradient.classList.add('hide');
    }
  }

  // Initialize state
  handleScroll(window.scrollY);
});


/**offer models */

// Modal functionality for index.html (What We Offer section)
document.addEventListener('DOMContentLoaded', function() {
  // Get all modal buttons and modals
  const modalButtons = document.querySelectorAll('.read-more-btn');
  const modals = document.querySelectorAll('.package-modal');
  const closeButtons = document.querySelectorAll('.modal-close');

  // Open modal when clicking a button
  modalButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal when clicking close button
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.package-modal');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Close modal when clicking outside
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality
  const modalButtons = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close');

  // Open modal
  modalButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Close when clicking outside
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
});

//////
 document.addEventListener('DOMContentLoaded', function() {
    const swiper2 = new Swiper('.swiper-container-2', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      effect: 'creative', // Using creative effect for advanced movement
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
          opacity: 0
        },
        next: {
          translate: ['100%', 0, 0],
          opacity: 0
        },
      },
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      },
      on: {
        init: function() {
          // Trigger animations on initial load
          this.slides[this.activeIndex].querySelector('.slide-title').style.transform = 'translateX(0)';
          this.slides[this.activeIndex].querySelector('.slide-title').style.opacity = '1';
          // ... repeat for other elements
        },
        slideChange: function() {
          // Reset all animations
          const slides = this.slides;
          for (let i = 0; i < slides.length; i++) {
            slides[i].querySelector('.slide-title').style.transform = 'translateX(-50px)';
            slides[i].querySelector('.slide-title').style.opacity = '0';
            // ... repeat for other elements
          }
          
          // Animate active slide
          const activeSlide = slides[this.activeIndex];
          setTimeout(() => {
            activeSlide.querySelector('.slide-title').style.transform = 'translateX(0)';
            activeSlide.querySelector('.slide-title').style.opacity = '1';
            // ... repeat for other elements with appropriate delays
          }, 50);
        }
      }
    });
  });

    
      // FAQ Toggle Functionality
      document.addEventListener('DOMContentLoaded', function() {
        // FAQ toggle functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
          question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            const toggle = question.querySelector('.faq-toggle');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(faqItem => {
              if (faqItem !== item) {
                faqItem.querySelector('.faq-question').classList.remove('active');
                faqItem.querySelector('.faq-answer').classList.remove('active');
              }
            });
            
            // Toggle current item
            question.classList.toggle('active');
            answer.classList.toggle('active');
          });
        });
        
        // Modal functionality
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const modals = document.querySelectorAll('.package-modal');
        const modalCloseButtons = document.querySelectorAll('.modal-close');
        
        // Open modal
        modalTriggers.forEach(trigger => {
          trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
          });
        });
        
        // Close modal
        modalCloseButtons.forEach(button => {
          button.addEventListener('click', () => {
            const modal = button.closest('.package-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
          });
        });
        
        // Close modal when clicking outside
        modals.forEach(modal => {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
            }
          });
        });
        
        // Back to top button
        const backTopBtn = document.querySelector('.back-top-btn');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            backTopBtn.style.opacity = '1';
            backTopBtn.style.visibility = 'visible';
            backTopBtn.style.transform = 'translateY(0)';
          } else {
            backTopBtn.style.opacity = '0';
            backTopBtn.style.visibility = 'hidden';
            backTopBtn.style.transform = 'translateY(2rem)';
          }
        });
        
        // WhatsApp button
        const whatsappBtn = document.querySelector('.whatsapp-btn');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.visibility = 'visible';
            whatsappBtn.style.transform = 'translateY(0)';
          } else {
            whatsappBtn.style.opacity = '0';
            whatsappBtn.style.visibility = 'hidden';
            whatsappBtn.style.transform = 'translateY(6rem)';
          }
        });
      });
    

     //////
     // Initialize Experience Gallery Swipers
document.addEventListener('DOMContentLoaded', function() {
  // Main gallery swiper
  const mainSwiper = new Swiper('.main-gallery-swiper', {
    loop: true,
    spaceBetween: 0,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.main-gallery-next',
      prevEl: '.main-gallery-prev',
    },
    thumbs: {
      swiper: {
        el: '.thumbnail-gallery-swiper',
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          }
        }
      },
    },
  });

  // Thumbnail click event
  const thumbnails = document.querySelectorAll('.gallery-thumbnail');
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      mainSwiper.slideTo(index);
    });
  });

  // Parallax effect on main image
  const mainImages = document.querySelectorAll('.gallery-main-image img');
  mainImages.forEach(img => {
    img.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      img.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});
