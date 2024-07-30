const calculate = document.getElementById("calculate-btn");
const result = document.getElementById("result");

calculate.addEventListener("click", (w, h) => {
  function firstLetterConversor(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function calculateImc() {
    const fullname = document.getElementById("name").value;
    const correctFullname = firstLetterConversor(fullname);
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (fullname !== "" && height !== "" && weight !== "") {
      const calcResult = (weight / (height * height)) * 10000;
      let rating = "";

      if (calcResult < 18.5) {
        rating = "abaixo do peso.";
      } else if (calcResult < 25) {
        rating = "com peso ideal. Parabéns!";
      } else if (calcResult < 30) {
        rating = "levemente acima do peso.";
      } else if (calcResult < 35) {
        rating = "acima do peso ideal, com obesidade grau I";
      } else if (calcResult < 45) {
        rating = "acima do peso ideal, com obesidade grau II";
      } else {
        rating = "acima do peso ideal, com obesidade grau III";
      }
      
      console.log("Passou:")
      console.log(`Nome: valor ${fullname} tipo ${typeof fullname}`);
      console.log(`Altura: ${height} tipo ${typeof height}`);
      console.log(`Peso: ${weight} tipo ${typeof weight}`);
      console.log(`Resultado: ${calcResult} tipo ${typeof calcResult}`);

      result.textContent = `${correctFullname}, o seu IMC é ${calcResult.toFixed(
        2
      )}. Você está ${rating}`;
    } else {
      alert("Preencha todos os campos!");
      console.log("Não passou:")
      console.log(`Nome: valor ${fullname} tipo ${typeof fullname}`);
      console.log(`Altura: ${height} tipo ${typeof height}`);
      console.log(`Peso: ${weight} tipo ${typeof weight}`);
    }
  }

  calculateImc();
});
