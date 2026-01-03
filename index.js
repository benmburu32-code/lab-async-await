// Task 2: Display Posts - Create Function to Display Posts called displayPosts()
function displayPosts(posts) {
  // The id of the ul is post-list
  const postList = document.getElementById('post-list');

  // Safety check: if postList is not found, stop execution to prevent errors
  if (!postList) {
    console.error('Could not find element with id "post-list"');
    return;
  }

  // Loop through the posts list
  posts.forEach((post) => {
    // Create a li tag
    const li = document.createElement('li');

    // Create a new h1 tag
    const h1 = document.createElement('h1');
    // Add the title as the textContent
    h1.textContent = post.title;

    // Create a new p tag
    const p = document.createElement('p');
    // Add the body as the textContent
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to the ul
    postList.appendChild(li);
  });
}

// Task 2: Refactor with Async/Await - Create function to house fetch and apply async
async function fetchPosts() {
  try {
    // Fetch Data from an API
    // Apply await to fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check for network errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON
    const posts = await response.json();

    // Call displayPosts() function after fetch
    displayPosts(posts);
    
  } catch (error) {
    // Task 3: Error handling with developer tools
    console.error('Error fetching posts:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});