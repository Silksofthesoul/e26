(function() {
  const { Scene, Domino, rndInt } = window.__lib;
  const scene = new Scene();

  const fill = _ => {
    let isRun = true;
    document.documentElement.style.setProperty('--domino-size-short', `${rndInt(2, 10)}rem`);
    while(isRun) {
      let domino = new Domino({scene});
      if(domino.isOutFromScene) { 
        isRun = false;
        domino.remove();
        domino = null;
      }
    }
  };

  const process = () => {
    Domino && Domino.flush();
    fill();
    let t = setTimeout(_ => process(), rndInt(1000, 10000));
  };

  process();
})();
