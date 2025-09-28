'use strict';
(function () {
  if(!window.__lib) window.__lib = {};

  const int = val => parseInt(val, 10);
  const float = val => parseFloat(val);
  const str = val => String(val);

  const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const rndFromArray = arr => arr[ rndInt(0, arr.length - 1) ];

  const q = (selector, context = document.body, mode = 'one') => {
    if (mode === 'one') context.querySelector(selector);
    else if (mode === 'all') context.querySelectorAll(selector);
    else return null;
  };

  const element = (tag, attr, callback) => {
    const el = document.createElement(tag);
    if (attr) Object.keys(attr).forEach(key => el.setAttribute(key, attr[key]));
    return callback ? callback(el) : el;
  };

  const insert = (el, parent = document.body, mode = 'beforeend') => {
    parent.insertAdjacentElement(mode, el);
    return insert;
  };


  window.__lib = {
    ...(window.__lib || {}),
    int,
    float,
    str,
    rndInt,
    rndFromArray,
    q,
    element,
    insert,
  };

})();
