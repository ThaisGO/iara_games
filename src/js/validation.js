const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
    const password = form.querySelector("#register-password");
    const passwordConfirmation = form.querySelector(
        "#register-password-confirm"
    );

    // Validação personalizada da confirmação de senha
    if (password && passwordConfirmation) {
        const validatePassword = () => {
            if (passwordConfirmation.value !== password.value) {
                passwordConfirmation.setCustomValidity(
                    "As senhas não coincidem."
                );
            } else {
                passwordConfirmation.setCustomValidity("");
            }
        };

        password.addEventListener("input", validatePassword);
        passwordConfirmation.addEventListener("input", validatePassword);
    }

    // Validação ao enviar o formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        form.classList.add("was-validated");

        if (form.checkValidity()) {
            alert("Tudo certo! Formulário validado com sucesso.");
        }
    });
});