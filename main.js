

// Formular one aus HTML auslesen
let formOne = document.getElementById('form-one');

// diesem Formular ein Eventlistener auf den "submit" Event hinzufügen
formOne.addEventListener('submit', function(event) {
    // unterdrücke das Standardverhalten (Formular an URL senden und Browser refresh)
    event.preventDefault();

    // lese alle Werte aus den Inputfeldern aus
    const language = document.getElementById("language").value;
    const level = document.getElementById("level").value;
    const startDaten = document.getElementById("start-daten").value;
    const dayOfWeek = document.getElementById("day-of-week").value;

    // speichere die Werte im Local Storage
    localStorage.setItem('language', language);
    localStorage.setItem('level', level);
    localStorage.setItem('start-daten', startDaten);
    localStorage.setItem('day-of-week', dayOfWeek);

    // redirect auf die nächste Seite (formular-2.html)
    window.location.href = 'formular-2.html';
});



// Formular two initialisieren und Daten aus Local Storage laden
/* document.addEventListener('DOMContentLoaded', function() {
    const language = localStorage.getItem('language');
    const level = localStorage.getItem('level');
    const startDaten = localStorage.getItem('startDaten');
    const dayOfWeek = localStorage.getItem('dayOfWeek');

    document.getElementById('details-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;

        const result = `
            <h2>Anmeldung zum Sprachkurs - Bestätigung</h2>
            <p><strong>Vorname:</strong> ${firstName}</p>
            <p><strong>Nachname:</strong> ${lastName}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Kurs Sprache:</strong> ${language}</p>
            <p><strong>Sprachniveau:</strong> ${level}</p>
            <p><strong>Kursstart Datum:</strong> ${startDaten}</p>
            <p><strong>Wochentag:</strong> ${dayOfWeek}</p>
        `;

        const newWindow = window.open('', '_blank');
        newWindow.document.write(result);
    });
});
 */



/* // formular one aus html auslesen
let formOne = document.getElementById('registrations-form');
// formar two aus html auslesen

// diesem formular ein eventlistener auf den "submit" event hinzufügen
formOne.addEventListener('submit', function(event){

    // unterdrücke das standardverhalten (formular an url senden und browser refresh)
    event.preventDefault();

    // lese alle werte aus den inputfeldern aus
    const firstName = document.getElementById("first-name").value;      
    const lastname = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;

    const language = document.getElementById("language").value;
    const level = document.getElementById("level").value;
    const startDaten = document.getElementById("start-daten").value;
    const dayOfWeek = document.getElementById("day-of-Week").value;

    // speichere die werte im local storage
    localStorage.setItem('language', language);

    // redirect auf die nächste seite (formular two / confirm)


}); */