  Ranju.command = {
    open: function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.setAttribute('data-state', 'open');
        var inp = $('.command-input', el);
        if (inp) setTimeout(function () { inp.focus(); }, 100);
      }
    },
    close: function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute('data-state', 'closed');
    }
  };

  function initCommand() {
    on(document, 'click', '.command-overlay', function (e) {
      if (e.target === this) this.setAttribute('data-state', 'closed');
    });

    on(document, 'input', '.command-input', function () {
      var overlay = this.closest('.command-overlay');
      if (!overlay) return;
      var val = this.value.toLowerCase();
      $$('.command-item', overlay).forEach(function (item) {
        var text = item.textContent.toLowerCase();
        item.style.display = text.includes(val) ? '' : 'none';
      });
      $$('.command-group-label', overlay).forEach(function (lbl) {
        var group = lbl.parentElement;
        var visible = $$('.command-item', group).some(function (i) {
          return i.style.display !== 'none';
        });
        lbl.style.display = visible ? '' : 'none';
      });
    });

    on(document, 'keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        var cmd = $('.command-overlay');
        if (cmd) {
          var isOpen = cmd.getAttribute('data-state') === 'open';
          cmd.setAttribute('data-state', isOpen ? 'closed' : 'open');
          if (!isOpen) {
            var inp = $('.command-input', cmd);
            if (inp) setTimeout(function () { inp.focus(); }, 100);
          }
        }
      }
    });
  }
