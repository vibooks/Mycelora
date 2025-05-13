window.onload = function() {
    // Wait for the text typing animations to finish (adjust timing as needed)
    setTimeout(function() {
      // Show the "Commune" button by changing its display style to block
      document.getElementById('communeBtn').style.display = 'block';
    }, 9000); // Adjust this value to match the typing duration
  };

document.getElementById('communeBtn').addEventListener('click', function() {
    window.location.href = 'books.html'; // Redirect to books page
});
