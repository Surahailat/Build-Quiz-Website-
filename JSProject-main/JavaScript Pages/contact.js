console.log("hi");
const textarea = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button[type="submit"]'); // حدد زر الإرسال
const charCounter = document.createElement('p');

// إعدادات عداد الأحرف
charCounter.textContent = 'Remaining letters: 200';
charCounter.style.fontSize = '12px';
charCounter.style.color = '#555';

// أضف العداد قبل زر الإرسال
submitButton.parentNode.insertBefore(charCounter, submitButton);

textarea.addEventListener('input', function () {
    const maxChars = 200;
    const remainingChars = maxChars - this.value.length;
    charCounter.textContent = `Remaining letters: ${remainingChars}`;
    if (remainingChars < 0) {
        charCounter.style.color = 'red';
    } else {
        charCounter.style.color = '#555';
    }
});





document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Your message has been sent successfully!';
    successMessage.style.color = 'green';
    successMessage.style.marginTop = '10px';
    this.appendChild(successMessage);

    setTimeout(() => successMessage.remove(), 3000); 
});


emailjs.init("FDAg8VNtcIrRBbQQ7");  


document.getElementById("con-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    // Get form data
    let name = document.getElementById("name").value;
   
//    let lastName = document.getElementById("lastName").value;
 let email = document.getElementById("email").value;
   let message = document.getElementById("message").value;

    // Send data to EmailJS
    emailjs.send("service_db90d88", "template_w0cze6p", {
        firstName: name,
       
        email: email,
        message: message
    })
    .then(function (response) {
        
        console.log("Your message has been sent successfully!", response);
        document("Message sent successfully!");
        document.getElementById("name").value = "";

document.getElementById("email").value = "";
document.getElementById("message").value = "";
        
       
        
    }, function (error) {
        console.error("Message failed to send:", error);
        document("Failed to send message. Please try again.");
        successMessage.style.color = 'green';
    });
});