(function () {
  'use strict';

  /* ----- Helpers ----- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
  function on(el, evt, sel, fn) {
    if (typeof sel === 'function') { fn = sel; sel = null; }
    el.addEventListener(evt, function (e) {
      if (!sel) return fn.call(el, e);
      var t = e.target.closest(sel);
      if (t && el.contains(t)) fn.call(t, e);
    });
  }
  function toggle(el, attr, forceOpen) {
    var open = forceOpen !== undefined ? forceOpen : el.getAttribute(attr) !== 'open';
    el.setAttribute(attr, open ? 'open' : 'closed');
    return open;
  }

  var Ranju = window.Ranju = {};

  Ranju.theme = {
    current: function () {
      return document.documentElement.getAttribute('data-theme') || 'light';
    },
    set: function (t) {
      document.documentElement.setAttribute('data-theme', t);
      try { localStorage.setItem('ranju-theme', t); } catch (e) {}
    },
    toggle: function () {
      this.set(this.current() === 'dark' ? 'light' : 'dark');
    },
    init: function () {
      try {
        var saved = localStorage.getItem('ranju-theme');
        if (saved) { this.set(saved); return; }
      } catch (e) {}
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.set('dark');
      }
    }
  };
