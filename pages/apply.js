document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("application-form");
    const submitBtn = document.getElementById("submit-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const dobInput = document.getElementById("dob");
    const emailInput = document.getElementById("email");
    const addressInput = document.getElementById("address");
    const marks10thInput = document.getElementById("10thMarks");
    const marks12thInput = document.getElementById("12thMarks");
    const courseSelect = document.getElementById("course");
    const specializationSelect = document.getElementById("specialization");

    // Specializations for each course
    const specializations = {
        "Integrated Mtech": ["Software Engineering", "Computer Science in Collaboration with Virtusa", "Data Science"],
        "Btech": ["CSE", "ECE", "EEE", "Mech. Engineering", "CSBS"],
    };

    // Function to populate specialization options based on the selected course
    function populateSpecializations() {
        const selectedCourse = courseSelect.value;
        const specializationOptions = specializations[selectedCourse] || [];
        specializationSelect.innerHTML = '<option value="">Select Specialization</option>';

        specializationOptions.forEach(function (specialization) {
            const option = document.createElement("option");
            option.value = specialization;
            option.textContent = specialization;
            specializationSelect.appendChild(option);
        });
    }

    // Event listener for course selection
    courseSelect.addEventListener("change", populateSpecializations);

    // Function to validate an input
    function validateInput(inputElement, errorElementId, regex, errorMessage) {
        const value = inputElement.value.trim();
        const errorElement = document.getElementById(errorElementId);
        
        if (!regex.test(value)) {
            inputElement.style.borderColor = "red";
            errorElement.textContent = errorMessage;
            return false;
        } else {
            inputElement.style.borderColor = "";
            errorElement.textContent = "";
            return true;
        }
    }

    // Event listener for input validation on input event
    function addValidationOnInput(inputElement, regex, errorMessage, errorElementId) {
        inputElement.addEventListener("input", function () {
            validateInput(inputElement, errorElementId, regex, errorMessage);
        });
    }

    addValidationOnInput(firstNameInput, /^[A-Za-z]{1,10}$/, "First name should contain only alphabets up to 10 characters.", "firstName-error");
    addValidationOnInput(lastNameInput, /^[A-Za-z]{1,10}$/, "Last name should contain only alphabets up to 10 characters.", "lastName-error");
    addValidationOnInput(phoneNumberInput, /^\d{10}$/, "Phone number should contain exactly 10 digits.", "phoneNumber-error");
    addValidationOnInput(dobInput, true, "Age should be between 18 and 19.", "dob-error");
    addValidationOnInput(emailInput, /^[\w.-]+@gmail\.com$/, "Email address should be in the format [A-Za-z0-9.-]+@gmail.com.", "email-error");
    addValidationOnInput(addressInput, /^.{41,}$/, "Address should be longer than 20 characters.", "address-error");
    addValidationOnInput(marks10thInput, /^100$|^\d{1,2}(\.\d{1,2})?$/, "Enter valid 10th marks in percentage.", "10thMarks-error");
    addValidationOnInput(marks12thInput, /^100$|^\d{1,2}(\.\d{1,2})?$/, "Enter valid 12th marks in percentage.", "12thMarks-error");

    function validateForm() {
        const errors = [];
        
        const isValidFirstName = validateInput(firstNameInput, "firstName-error", /^[A-Za-z]{1,10}$/, "First name should contain only alphabets up to 10 characters.");
        if (!isValidFirstName) {
            errors.push("First name is invalid");
        }
        
        const isValidLastName = validateInput(lastNameInput, "lastName-error", /^[A-Za-z]{1,10}$/, "Last name should contain only alphabets up to 10 characters.");
        if (!isValidLastName) {
            errors.push("Last name is invalid");
        }
        
        const isValidPhoneNumber = validateInput(phoneNumberInput, "phoneNumber-error", /[6-9]\d{9}$/, "Phone number should contain exactly 10 digits.");
        if (!isValidPhoneNumber) {
            errors.push("Phone number is invalid");
        }
        
        const dobValue = new Date(dobInput.value);
        const isValidAge = validateInput(dobInput, "dob-error", dobValue.getFullYear() >= 2005 && dobValue.getFullYear() <= 2007, "Year of birth should be between 2005 and 2007.");
        if (!isValidAge) {
            errors.push("Age is invalid");
        }
        
        
        const isValidEmail = validateInput(emailInput, "email-error", /^[\w.-]+@gmail\.com$/, "Email address should be in the format [A-Za-z0-9.-]+@gmail.com.");
        if (!isValidEmail) {
            errors.push("Email is invalid");
        }
        
        const isValidAddress = validateInput(addressInput, "address-error", /^.{41,}$/, "Address should be longer than 20 characters.");
        if (!isValidAddress) {
            errors.push("Address is invalid");
        }
        
        const isValid10thMarks = validateInput(marks10thInput, "10thMarks-error", /^100$|^\d{1,2}(\.\d{1,2})?$/, "Enter valid 10th marks in percentage.");
        if (!isValid10thMarks) {
            errors.push("10th marks are invalid");
        }
        
        const isValid12thMarks = validateInput(marks12thInput, "12thMarks-error", /^100$|^\d{1,2}(\.\d{1,2})?$/, "Enter valid 12th marks in percentage.");
        if (!isValid12thMarks) {
            errors.push("12th marks are invalid");
        }

        alert(errors.length);
        
        if (errors.length > 0) {
            alert("Please correct the following errors:\n\n" + errors.join("\n"));
        } else {
            alert("Application submitted successfully");
            window.history.back();
        }
    }
    

    submitBtn.addEventListener("click", function (e) {
        alert("Application submitted successfully");
        window.history.back();
    });

    cancelBtn.addEventListener("click", function () {
        window.history.back();
    });
});
