// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Verificar as credenciais
    if (email === "jadeland@gmail.com" && senha === "1234") {
        window.location.href = "https://miro.com/app/board/uXjVLdOJxWU=/"; // Redireciona para a página principal
    } else {
        // Mostra mensagem de erro
        document.getElementById("errorMessage").style.display = "block";
    }
});
