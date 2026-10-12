// https://web3forms.com/

document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "ef3453da-ace4-432d-9304-6fe04343f8a1");

    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    try {
       const response = await fetch("https://api.web3forms.com/submit", {, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Message Sent!";
            e.target.reset();
        } else {
            result.innerHTML = "Error: " + data.message;
        }
    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message.";
    }
};