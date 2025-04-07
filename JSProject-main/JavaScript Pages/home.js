const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function logoutt() {
  localStorage.removeItem("users");
  window.location.href = "login.html"; 
}

function changeSlide() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeSlide, 3000); // Change image every 3 seconds

// make filtrations 

let catagories = document.querySelectorAll(".shuffle li")
let boxes = document.querySelectorAll('.images-container .box');


function filers(category) {
    boxes.forEach((box) => {
            // Hide all boxes initially
        box.style.display = 'none';

    // Show boxes based on selected category
        if (category == "all" || box.dataset.category === category) {
            box.style.display = 'block';
        }

    })
}


catagories.forEach((classs) => {
    // Add event listener to each category
    classs.addEventListener("click", function() {
    // Update active class

        catagories.forEach((removes) => removes.classList.remove("active"));
        classs.classList.add("active")

        // Update active class
        let selectedCategory = classs.getAttribute('data-category');
    
            // Call the function to filter boxes
        filers(selectedCategory);
    })

})

// Initial call to display all items

filterCategory('all');
