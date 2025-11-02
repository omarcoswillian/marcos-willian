/* ======== Loader ========= */
document.addEventListener("DOMContentLoaded", () => {
  let tl = new TimelineMax();

  tl.fromTo(
    ".bg-loader",
    1,
    { width: "100%" },
    { width: "0%", delay: 5, ease: Expo.easeInOut }
  );
});

/* ======== Calcular ============ */

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let crianca = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * crianca;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * crianca;

  resultado.innerHTML = `<h2 class="h2-result">Você irá precisar de </h2>`;
  resultado.innerHTML += `<br><p class="resultado-info">${
    qtdTotalCarne / 1000
  }kg de carne</p>`;
  resultado.innerHTML += `<p class="resultado-info">${Math.ceil(
    qtdTotalCerveja / 355
  )} latinhas de cerveja</p>`;
  resultado.innerHTML += `<p class="resultado-info">${Math.ceil(
    qtdTotalBebidas / 2000
  )} garrafas de refrigerante</p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 750;
  } else {
    return 600;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
