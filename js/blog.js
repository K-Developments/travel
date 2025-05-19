document.addEventListener('DOMContentLoaded', function() {
  // Blog data - this can be easily updated or fetched from an API


  // DOM Elements
  const blogContainer = document.getElementById('blogContainer');
  const categoryButtons = document.querySelectorAll('.category-btn');
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  const pageNumbersContainer = document.getElementById('pageNumbers');
  const main = document.querySelector('.blog-main');

  // Pagination variables
  let currentPage = 1;
  const postsPerPage = 6;
  let filteredBlogData = [...blogData];

  // Initialize the blog
  function initBlog() {
    renderBlogPosts(true);
    setupPagination();
    setupCategoryFilters();
    setupWhatsAppButton();
    setupBackToTopButton();
  }

  // Disable/Enable pagination buttons
  function setPaginationDisabled(state) {
    prevPageBtn.disabled = state;
    nextPageBtn.disabled = state;
    pageNumbersContainer.querySelectorAll('.page-number').forEach(btn => {
      btn.style.pointerEvents = state ? 'none' : 'auto';
      btn.style.opacity = state ? '0.5' : '1';
    });
  }

  // Render blog posts with fade animation and smooth GSAP scroll
  function renderBlogPosts(scrollToTop = false) {
    setPaginationDisabled(true);
    blogContainer.classList.add('fade-out');

    function onTransitionEnd() {
      blogContainer.removeEventListener('transitionend', onTransitionEnd);

      // Clear and render posts
      blogContainer.innerHTML = '';
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const postsToShow = filteredBlogData.slice(startIndex, endIndex);

      if (postsToShow.length === 0) {
        blogContainer.innerHTML = '<p class="no-posts">No blog posts found in this category.</p>';
      } else {
        postsToShow.forEach(post => {
          const blogPost = createBlogPostElement(post);
          blogContainer.appendChild(blogPost);
        });
      }

      blogContainer.classList.remove('fade-out');
      setPaginationDisabled(false);

      if (scrollToTop) {
        // Use GSAP for smooth scroll to blog container
        gsap.to(window, {
          duration: 1.0,
          scrollTo: { y: main, offsetY: 200 },
          ease: "power2.out"
        });
      }
    }

    blogContainer.addEventListener('transitionend', onTransitionEnd, { once: true });
  }

  // Create HTML for a single blog post
  function createBlogPostElement(post) {
    const blogPost = document.createElement('article');
    blogPost.className = 'blog-card';
    blogPost.dataset.category = post.category;

    blogPost.innerHTML = `
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
        <span class="blog-category">${formatCategory(post.category)}</span>
      </div>
      <div class="blog-content">
        <div class="blog-date">
          <ion-icon name="time-outline"></ion-icon>
          <span>${post.date} • ${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
       <a href="blog-post.html?id=${post.id}" class="read-more">
  Read More <ion-icon name="arrow-forward-outline"></ion-icon>
</a>
      </div>
    `;

    return blogPost;
  }

  // Format category for display
  function formatCategory(category) {
    return category.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  // Setup pagination controls
  function setupPagination() {
    updatePagination();

    prevPageBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderBlogPosts(true);  // scroll on prev page click
        updatePagination();
      }
    });

    nextPageBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredBlogData.length / postsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderBlogPosts(true);  // scroll on next page click
        updatePagination();
      }
    });
  }

  // Update pagination UI
  function updatePagination() {
    const totalPages = Math.ceil(filteredBlogData.length / postsPerPage);
    pageNumbersContainer.innerHTML = '';

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    for (let i = 1; i <= totalPages; i++) {
      const pageNumber = document.createElement('span');
      pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
      pageNumber.textContent = i;
      pageNumber.addEventListener('click', () => {
        currentPage = i;
        renderBlogPosts(true); // scroll on page number click
        updatePagination();
      });
      pageNumbersContainer.appendChild(pageNumber);
    }
  }

  // Setup category filters
  function setupCategoryFilters() {
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter posts
        const category = button.dataset.category;
        if (category === 'all') {
          filteredBlogData = [...blogData];
        } else {
          filteredBlogData = blogData.filter(post => post.category === category);
        }

        // Reset to first page and render with scroll
        currentPage = 1;
        renderBlogPosts(true);
        updatePagination();
      });
    });
  }

  // WhatsApp button behavior
  function setupWhatsAppButton() {
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
  }

  // Back to top button behavior
  function setupBackToTopButton() {
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
      gsap.to(window, {
        duration: 0.5,
        scrollTo: 0,
        ease: "power2.out"
      });
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input').value;
      alert(`Thank you for subscribing with ${email}! You'll receive our latest travel updates.`);
      this.reset();
    });
  }

  // Initialize the blog
  initBlog();
});