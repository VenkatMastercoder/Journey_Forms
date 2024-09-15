document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".checkbox-input");
  const otherInput = document.querySelector(".other-input");
  const maxSelections = 3;

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const checkedCheckboxes = document.querySelectorAll(
        ".checkbox-input:checked"
      );

      console.log(checkedCheckboxes);

      if (checkedCheckboxes.length > maxSelections) {
        alert(`You can only select up to ${maxSelections} options.`);
        this.checked = false;
      }
    });
  });

  // Auto-check the "Other" checkbox when its text field is not blank
  otherInput.addEventListener("input", function () {
    const otherCheckbox = otherInput.previousElementSibling; // Get the previous checkbox element

    if (otherInput.value.trim() !== "") {
      otherCheckbox.checked = true; // Check the "Other" checkbox if input is not blank
    } else {
      otherCheckbox.checked = false; // Uncheck the "Other" checkbox if input is blank
    }
  });

  // Handle the Next button click
  document
    .querySelector(".button-variant-2")
    .addEventListener("click", function (event) {
      const checkedCheckboxes = document.querySelectorAll(
        ".checkbox-input:checked"
      );

      if (checkedCheckboxes.length === 0) {

        console.log(checkedCheckboxes[0])
        alert("Please select at least 3 option.");
        event.preventDefault();
      } else {
        window.location.href = "./research-details.html";
      }
      if (checkedCheckboxes.length === 1) {
        alert("Please select at least 3 option.");
        event.preventDefault();
      } else {
        window.location.href = "./research-details.html";
      }
      if (checkedCheckboxes.length === 2) {
        alert("Please select at least 3 option.");
        event.preventDefault();
      } else {
        window.location.href = "./research-details.html";
      }
    });
});
