document.querySelectorAll('.toggle-password').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const input = this.previousElementSibling; // the input field
        if (input.type === "password") {
            input.type = "text";
            this.textContent = '🙈'; // changing the icon to 'closed eye' when visible
        } else {
            input.type = "password";
            this.textContent = '👁'; // changing the icon back to 'open eye' when hidden
        }
    });
});