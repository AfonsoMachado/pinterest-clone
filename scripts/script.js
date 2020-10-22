const grids = document.querySelectorAll('.grid');
const heading = document.querySelectorAll('.heading .wrapper. text');

function enterScreen(index) {}

function exitScreen(index, exitDelay) {}

function setupAnimationCycle({
  initialScreenIndex,
  timePerScreen,
  exitDelay,
}) {}

setupAnimationCycle({
  // tela inicial que abre quando o usuario abre a pagina
  initialScreenIndex: 0,
  // tempo que os cartões permanecem na tela
  timePerScreen: 2000, //ms
  // tempo de saida dos cartões
  exitDelay: 200 * 7, //ms
});
