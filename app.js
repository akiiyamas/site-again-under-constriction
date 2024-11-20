const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

document.getElementById('comment-form').addEventListener('submit', function (event) {
  event.preventDefault();  

  // commenter's name and comment text
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  if (name && comment) {
      // Create a new div to display the comment
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      
      // comment content
      commentDiv.innerHTML = `
          <strong>${name}</strong>: <p>${comment}</p>
      `;
      
      // new comment to the comments display section
      document.getElementById('commentsDisplay').appendChild(commentDiv);
      
      
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
  }
});
