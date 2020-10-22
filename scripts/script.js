const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wrapper .text');

function enterScreen(index) {
  const grid = grids[index];
  const heading = headings[index];
  const gridColumns = grid.querySelectorAll('.column');

  // ao entrar numa tela , a div ganha a classe .active
  grid.classList.add('active');

  gridColumns.forEach((element) => {
    element.classList.remove('animate-before', 'animate-after');
  });

  // abrindo o heading
  // nesse caso faz com que apareça somente o heading indicado no index, removendo o animate-before
  heading.classList.remove('animate-before', 'animate-after');
}

function exitScreen(index, exitDelay) {
  const grid = grids[index];
  const heading = headings[index];
  const gridColumns = grid.querySelectorAll('.column');

  gridColumns.forEach((element) => {
    element.classList.add('animate-after');
  });

  heading.classList.add('animate-after');

  // setando a grid como inativa
  setTimeout(() => {
    grid.classList.remove('active');
  }, exitDelay);
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
  // tempo do ciclo da animação, quando o primeiro frame aparece até quando o ultimo frame some
  const cycleTime = timePerScreen + exitDelay;
  // define qual a proxima tela, inciando com a tela inicial = 0
  let nextIndex = 0;

  function nextCycle() {
    const currentIndex = nextIndex;

    enterScreen(currentIndex);

    // executando depois que finalizar a execução da tela atual
    setTimeout(() => {
      exitScreen(currentIndex, exitDelay);
    }, timePerScreen);

    // index varia de 0 a 3 (4 telas)
    // caso chegue no ultimo index, o proximo será o zero
    nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
  }

  // chama da primeira vez
  nextCycle();

  // disparado a cada ciclo de animação
  setInterval(nextCycle, cycleTime);
}

setupAnimationCycle({
  // tempo que os cartões permanecem na tela (2 segundos)
  timePerScreen: 2000, //ms
  // tempo de saida dos cartões -> 2ms * o numero de cartões na tela
  exitDelay: 200 * 7, //ms
});
