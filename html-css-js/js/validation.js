/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input[type="text"] , input[type="email"]');
let chxboxs = document.querySelectorAll('input[type="checkbox"]');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let error = false;
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            alert("Proszę wypełnić wszystkie pola")
            input.classList.add('error');
            error = true;
        } else {
            input.classList.remove('error');
        }
        if (input.type == 'email') {
            let email = input.value.trim();
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                input.classList.remove('error')
            } else {
                alert("Niepoprawny adres email")
                input.classList.add('error')
                error = true
            }
        }
    });
    if (error) {
        return
    }
    let checked = false;
    chxboxs.forEach((chxbox) => {
        checked = chxbox.checked ? true : checked
    })
    if (!checked) {
        alert("Przynajmniej jedna sekcja jest wymagana")
        return
    }

    // implementacja wysyłania formularza
    alert("Formularz wysłany")
});