

let firstName = localStorage.getItem("first-name")
let lastName = localStorage.getItem("last-name")
let eMail = localStorage.getItem("email")
let language = localStorage.getItem("language")
let level = localStorage.getItem("level")
let startDaten = localStorage.getItem("start-daten")
let dayOfWeek = localStorage.getItem("day-of-week")

console.log(firstName);

const result = `
            <h2>Anmeldung zum Sprachkurs - Bestätigung</h2>
            <p><strong>Vorname:</strong> ${firstName}</p>
            <p><strong>Nachname:</strong> ${lastName}</p>
            <p><strong>E-Mail:</strong> ${eMail}</p>
            <p><strong>Kurs Sprache:</strong> ${language}</p>
            <p><strong>Sprachniveau:</strong> ${level}</p>
            <p><strong>Kursstart Datum:</strong> ${startDaten}</p>
            <p><strong>Wochentag:</strong> ${dayOfWeek}</p>
            `;
            document.getElementById('resultContainer').innerHTML = result;
            
            