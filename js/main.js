function gerarSenha() {
    // Define variáveis para os tipos de caracteres que o usuário escolheu
    var usarLetras = document.getElementById("letras").checked;
    var usarNumeros = document.getElementById("numeros").checked;
    var usarSimbolos = document.getElementById("simbolos").checked;

    // Define as variáveis que contêm os caracteres para cada tipo de caracter
    var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros = "0123456789";
    var simbolos = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    // Inicializa a variável senha como uma string vazia
    var senha = "";

    // Loop que executa 16 vezes para gerar a senha de 16 caracteres
    for (var i = 0; i < 16; i++) {
        // Seleciona um tipo de caracter aleatório com base nas escolhas do usuário
        var tipoAleatorio = "";
        if (usarLetras && !usarNumeros && !usarSimbolos) {
            tipoAleatorio = letras;
        } else if (!usarLetras && usarNumeros && !usarSimbolos) {
            tipoAleatorio = numeros;
        } else if (!usarLetras && !usarNumeros && usarSimbolos) {
            tipoAleatorio = simbolos;
        } else if (usarLetras && usarNumeros && !usarSimbolos) {
            tipoAleatorio = letras + numeros;
        } else if (usarLetras && !usarNumeros && usarSimbolos) {
            tipoAleatorio = letras + simbolos;
        } else if (!usarLetras && usarNumeros && usarSimbolos) {
            tipoAleatorio = numeros + simbolos;
        } else if (usarLetras && usarNumeros && usarSimbolos) {
            tipoAleatorio = letras + numeros + simbolos;
        } else {
            // Se o usuário não escolheu nenhum tipo de caracter, exibe uma mensagem de erro
            document.getElementById("erro").innerHTML = "Selecione pelo menos um tipo de caracter.";
            return;
        }

        // Seleciona um caracter aleatório do tipo de caracter escolhido
        var caracterAleatorio = tipoAleatorio.charAt(Math.floor(Math.random() * tipoAleatorio.length));

        // Adiciona o caracter aleatório à variável senha
        senha += caracterAleatorio;
    }

    // Define o valor do elemento de senha para a senha gerada
    document.getElementById("senha").value = senha;

    // Limpa a mensagem de erro (se houver)
    document.getElementById("erro").innerHTML = "";
}
