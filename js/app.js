/* ==========================================================
   UNIVERSAL CRM
   Authentication JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const togglePassword = document.getElementById("togglePassword");

    const loginButton = document.querySelector(".login-btn");

    /* ======================================
       Password Toggle
    ====================================== */

    if (togglePassword) {

        togglePassword.addEventListener("click", () => {

            if (password.type === "password") {

                password.type = "text";

                togglePassword.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                password.type = "password";

                togglePassword.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        });

    }

    /* ======================================
       Validation
    ====================================== */

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let valid = true;

        clearErrors();

        /* Email */

        if (email.value.trim() === "") {

            showError(emailError, "Email is required");

            email.parentElement.classList.add("error");

            valid = false;

        }

        else if (!validateEmail(email.value.trim())) {

            showError(emailError, "Enter a valid email address");

            email.parentElement.classList.add("error");

            valid = false;

        }

        else {

            email.parentElement.classList.add("success");

        }

        /* Password */

        if (password.value.trim() === "") {

            showError(passwordError, "Password is required");

            password.parentElement.classList.add("error");

            valid = false;

        }

        else if (password.value.length < 6) {

            showError(passwordError, "Minimum 6 characters");

            password.parentElement.classList.add("error");

            valid = false;

        }

        else {

            password.parentElement.classList.add("success");

        }

        if (!valid) return;

        /* ======================================
           Login Animation
        ====================================== */

        loginButton.classList.add("loading");

        loginButton.disabled = true;

        loginButton.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin me-2"></i>Signing In...';

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1800);

    });

    /* ======================================
       Helper Functions
    ====================================== */

    function showError(element, message) {

        element.textContent = message;

    }

    function clearErrors() {

        emailError.textContent = "";

        passwordError.textContent = "";

        document
            .querySelectorAll(".input-group")
            .forEach(group => {

                group.classList.remove("success");

                group.classList.remove("error");

            });

    }

    function validateEmail(email) {

        const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);

    }

});