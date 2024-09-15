document.getElementById("nextButton").addEventListener("click", function () {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contactNumber = document.getElementById("contact-number").value.trim();
  const interest = document.querySelector('input[name="interest"]:checked');

  // Check if all required fields are filled
  if (!firstName || !lastName || !email || !contactNumber || !interest) {
    alert("Please fill all required fields.");
    return;
  }

  const selectedOption = document.querySelector(
    'input[name="interest"]:checked'
  );

  if (selectedOption) {
    const slideValue = selectedOption.value;

    switch (slideValue) {
      case "Slide3":
        window.location.href = "./pages/research-details.html";
        break;
      case "Slide4":
        window.location.href = "./pages/interest-areas.html";
        break;
      case "Slide5":
        window.location.href = "./pages/thanks.html";
        break;
      default:
        alert("Please select an option.");
    }
  } else {
    alert("Please select an option.");
  }
});