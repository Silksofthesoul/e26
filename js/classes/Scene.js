'use strict';
(function() {
   if(!window.__lib) window.__lib = {};

  const { element, insert } = window.__lib;
  const {log} = console;

  class Scene {
    elRoot = null;

    constructor() {
      log('Scene');
      this.create();
    }

    create() {
      this.elRoot = element('div', { class: 'scene' });
      insert(this.elRoot);
    }
  };

  window.__lib = {
    ...(window.__lib || {}),
    Scene,
  };
})();
