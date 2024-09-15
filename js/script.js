document.getElementById("nextButton").addEventListener("click", function () {

  const selectedOption = document.querySelector('input[name="interest"]:checked');

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