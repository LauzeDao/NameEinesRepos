import React from "react";

function Form() {
    function sendForm() {
        const firstnameInput = document.getElementById("firstname");
        const lastnameInput = document.getElementById("lastname");
        const emailInput = document.getElementById("email");

        const firstname = firstnameInput.value;
        const lastname = lastnameInput.value;
        const email = emailInput.value;

        fetch("https://ddos-bot.azure-api.net/manual/paths/invoke", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': '7eff73552e9f41eca8c700cbcb241d35'
            },
            body: {
                "name": lastname,
                "firstname": firstname,
                "email": email
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Response from server:', data);
            })
            .catch((error) => {
              console.error('Error sending form data:', error);
            });
    }

    return(
        <>
            <div className="formContainer">
                <form className="userForm">
                    <input type="text" inputMode="text" id="lastname" placeholder="Name*" required></input>
                    <input type="text" inputMode="text" id="firstname" placeholder="Vorname*" required></input>
                    <input type="text" inputMode="email" id="email" placeholder="Email*" required></input>
                
                    <button type="submit" onSubmit={sendForm}>Absenden</button>
                </form>
            </div>
        </>
    );
}

export default Form;
