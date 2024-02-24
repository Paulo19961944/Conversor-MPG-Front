// Elementos de Entrada
const btnConvert = document.querySelector(".btn-1"); // Botão Calcular
const resetBtn = document.querySelector(".btn-2"); // Botão Reset
const kmPorLitro = document.getElementById("km"); // Valor em Km/L
const milesPerGallons = document.getElementById("MPG"); // Valor em Milhas por Galão
const resultValue = document.getElementById("result"); // Exibe o Resultado

// Função que converte km/l para MPG
function kmL(){
    const result = parseFloat(kmPorLitro.value) / 0.423; // Calcula o Resultado
    resultValue.textContent = " " + result.toFixed(2) + " MPG"; // Exibe o Resultado na Tela
}

// Função que converte MPG para km/l
function MPG(){
    const result = parseFloat(milesPerGallons.value) * 0.423; // Calcula o Resultado
    resultValue.textContent = " " + result.toFixed(2) + " km/l"; // Exibe o Resultado na Tela
}

// Função que exibe o resultado na tela
btnConvert.addEventListener("click", () => {
    if(kmPorLitro.value !== "" && milesPerGallons.value === ""){
        kmL();
    } else if(kmPorLitro.value === "" && milesPerGallons.value !== ""){
        MPG();
    } else {
        alert("Digite apenas um valor ou resete os parâmetros");
    }
});

// Reseta os Valores
resetBtn.addEventListener("click", () => {
    resultValue.textContent = ""; // Reseta o Valor Exibido na Tela
});