  // Function to perform the search
  function performSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const storyContainers = document.querySelectorAll(".container"); // Assuming each story is contained within a .container element

    storyContainers.forEach((container) => {
      const storyText = container.textContent.toLowerCase();
      if (storyText.includes(searchInput)) {
        container.style.display = "block"; // Show the container if it contains the search term
      } else {
        container.style.display = "none"; // Hide the container if it doesn't contain the search term
      }
    });
  }

  // Add a click event listener to the search button
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", performSearch);

  // Add a keyup event listener to the search input to perform search on Enter key press
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });
