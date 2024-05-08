document.getElementById('toggleButton').addEventListener('click', function() {
  // This function will toggle the display based on screen width.
  var content = document.getElementById('toggleContent');
  if (window.innerWidth < 768) {
      // Only toggle visibility if the viewport is less than 768 pixels.
      content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  } else {
      // Ensure that the content is always visible if the viewport width is 768 pixels or more.
      content.style.display = 'block';
  }
});

// Function to adjust the visibility based on the current window size.
function adjustDisplayOnResize() {
  var content = document.getElementById('toggleContent');
  if (window.innerWidth < 768) {
      content.style.display = 'none';
  } else {
      content.style.display = 'block';
  }
}

// Listen to resize events to adjust the display property dynamically.
window.addEventListener('resize', adjustDisplayOnResize);

document.addEventListener('DOMContentLoaded', adjustDisplayOnResize);
