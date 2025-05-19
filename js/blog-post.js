document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));
  
  // Check if blogData exists
  if (typeof blogData === 'undefined') {
    console.error('Blog data not loaded!');
    window.location.href = 'blog.html';
    return;
  }
  
  const currentPost = blogData.find(post => post.id === postId);
  
  if (!currentPost) {
    window.location.href = 'blog.html';
    return;
  }
  
  // Set basic post info
  document.title = `${currentPost.title} | Island Hopes Travels`;
  document.getElementById('postTitle').textContent = currentPost.title;
  document.getElementById('postCategory').textContent = formatCategory(currentPost.category);
  document.getElementById('postDate').textContent = currentPost.date || '';
  document.getElementById('postReadTime').textContent = currentPost.readTime || '';
  
  // Set image if it exists
  if (currentPost.image) {
    document.getElementById('postImage').src = currentPost.image;
    document.getElementById('postImage').alt = currentPost.title;
    document.getElementById('blogPostHero').style.backgroundImage = `url(${currentPost.image})`;
  }
  
  // Set content if it exists
  if (currentPost.content) {
    document.getElementById('postContent').innerHTML = currentPost.content;
  }
  
  // Handle tags - create empty array if not exists
  const tagsContainer = document.getElementById('postTags');
  const tags = currentPost.tags || [];
  tags.forEach(tag => {
    const tagElement = document.createElement('a');
    tagElement.href = `blog.html?category=${currentPost.category}`;
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });
  
  // Handle related posts - create empty array if not exists
  const relatedPostsContainer = document.getElementById('relatedPosts');
  const relatedPosts = currentPost.relatedPosts || [];
  relatedPosts.forEach(relatedId => {
    const relatedPost = blogData.find(post => post.id === relatedId);
    if (relatedPost) {
      const relatedElement = document.createElement('div');
      relatedElement.className = 'related-post';
      relatedElement.innerHTML = `
        <a href="blog-post.html?id=${relatedPost.id}">
          <div class="related-post-image">
            <img src="${relatedPost.image || ''}" alt="${relatedPost.title}">
          </div>
          <div class="related-post-content">
            <h3 class="related-post-title">${relatedPost.title}</h3>
            <p class="related-post-excerpt">${relatedPost.excerpt || ''}</p>
            <span class="related-post-link">Read More <ion-icon name="arrow-forward-outline"></ion-icon></span>
          </div>
        </a>
      `;
      relatedPostsContainer.appendChild(relatedElement);
    }
  });
  
  // Post navigation
  const currentIndex = blogData.findIndex(post => post.id === postId);
  const prevPostLink = document.getElementById('prevPost');
  const nextPostLink = document.getElementById('nextPost');
  
  if (currentIndex > 0) {
    const prevPost = blogData[currentIndex - 1];
    prevPostLink.href = `blog-post.html?id=${prevPost.id}`;
  } else {
    prevPostLink.style.display = 'none';
  }
  
  if (currentIndex < blogData.length - 1) {
    const nextPost = blogData[currentIndex + 1];
    nextPostLink.href = `blog-post.html?id=${nextPost.id}`;
  } else {
    nextPostLink.style.display = 'none';
  }
  
  function formatCategory(category) {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
});