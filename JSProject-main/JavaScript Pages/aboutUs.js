// let menuList = document.getElementById("menuList")
//         menuList.style.maxHeight="0px"


//         function menu() {
//             if(menuList.style.maxHeight=="0px"){
//                 menuList.style.maxHeight="300px"
//             }
//             else{
//                 menuList.style.maxHeight="0px"
//             }
            
//         }



const cardOverlay = document.getElementById('card-overlay');
const overlayText = document.getElementById('overlay-text');

cardOverlay.addEventListener('mouseover', () => {
  overlayText.innerHTML = `<a href="https://www.google.com" target="_blank" style="color: white; text-decoration: none;">Learn More</a>`;
});

cardOverlay.addEventListener('mouseout', () => {
  overlayText.textContent = 'Customer Stories';
});

