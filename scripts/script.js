const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wrapper .text');

function enterScreen(index) {
  const grid = grids[index];
  const heading = headings[index];
  const gridColumns = grid.querySelectorAll('.column');

  // ao entrar numa tela , a div ganha a classe .active
  grid.classList.add('active');

  gridColumns.forEach((element) => {
    element.classList.remove('animate-before');
  });
}

function exitScreen(index, exitDelay) {}

function setupAnimationCycle({ initialScreenIndex, timePerScreen, exitDelay }) {
  enterScreen(initialScreenIndex);
}

setupAnimationCycle({
  // tela inicial que abre quando o usuario abre a pagina
  initialScreenIndex: 0,
  // tempo que os cartões permanecem na tela
  timePerScreen: 2000, //ms
  // tempo de saida dos cartões
  exitDelay: 200 * 7, //ms
});
