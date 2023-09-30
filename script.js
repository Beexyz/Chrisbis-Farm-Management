// JavaScript to toggle password visibility
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
let isPasswordVisible = false; // Track the visibility state

togglePassword.addEventListener('click', function () {
    isPasswordVisible = !isPasswordVisible; // Toggle visibility state

    // Change the input type based on the visibility state
    passwordInput.setAttribute('type', isPasswordVisible ? 'text' : 'password');

    // Set the eye icon as it is (no change)
    togglePassword.innerHTML = '<i class="eye-icon"></i>';
});
