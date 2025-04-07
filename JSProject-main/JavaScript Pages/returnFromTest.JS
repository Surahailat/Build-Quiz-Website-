// JavaScript to show and hide the pop-up
document.querySelectorAll('.applyTestButton').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('testInstructionsPopup').style.display = 'flex';
    });
  });
  
  document.getElementById('closePopupButton').addEventListener('click', () => {
    document.getElementById('testInstructionsPopup').style.display = 'none';
  });
  