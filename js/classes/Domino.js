'use strict';
(function() {
   if(!window.__lib) window.__lib = {};

  const {
    element,
    insert,
    rndInt,
  } = window.__lib;


  class Domino {
    scene   = null;
    elRoot  = null;
    elSideA = null;
    elSideB = null;
    static dominos = [];

    constructor({ scene }) {
      this.scene = scene;
      this.create();
      Domino.dominos.push(this);
    }
    remove() {
      this.elRoot.remove();
    }

    getDots(el) {
      const count = rndInt(0, 6);
      el.classList.add(`domino__side--${count}`);
      for (let i = 0; i < count; i++) {
        const dot = element('div', { class: `domino__dot` });
        insert(dot, el);
      }
    }

    getOrientation() {
      const count = rndInt(0, 6);
      if(count % 2 === 0) this.elRoot.classList.add(`domino--hor`);
      else this.elRoot.classList.add(`domino--ver`);
    }

    create() {
      this.elRoot  = element('div', { class: 'domino'       });
      this.elSideA = element('div', { class: 'domino__side' });
      this.elSideB = element('div', { class: 'domino__side' });
      const elSideDelimetr = element('div', { class: 'domino__delimetr' });

      this.getDots(this.elSideA);
      this.getDots(this.elSideB);
      this.getOrientation();

      insert
        (this.elSideA,   this.elRoot)
        (this.elSideB,   this.elRoot)
        (elSideDelimetr, this.elRoot)
        (this.elRoot,    this.scene.elRoot);
    }

    get isOutFromScene() {
      const { right, bottom } = this.elRoot.getBoundingClientRect();
      const { rigth: sr, bottom: sb } = this.scene.elRoot.getBoundingClientRect();
      const c1 = right > sr;
      const c2 = bottom > sb;
      return c1 || c2;
    }

    static flush() {
      Domino.dominos
        .forEach((d, i, arr) => {
          d.remove();
          arr[i] = null;
        });
      Domino.dominos = [];
    }

  };

  window.__lib = {
    ...(window.__lib || {}),
    Domino,
  };
})();
