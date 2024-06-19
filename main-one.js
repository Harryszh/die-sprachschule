
let formOne = document.getElementById('formular-two');


formOne.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const eMail = document.getElementById("email").value;
    

    
    localStorage.setItem('first-name', firstName);
    localStorage.setItem('last-name', lastName);
    localStorage.setItem('email', eMail);
    

   
     window.location.href = 'anmeldungen.html';
   
});