  function initCombobox() {
    on(document, 'focusin', '.combobox-input', function () {
      var cb = this.closest('.combobox');
      if (cb) cb.setAttribute('data-state', 'open');
    });

    on(document, 'input', '.combobox-input', function () {
      var cb = this.closest('.combobox');
      if (!cb) return;
      var val = this.value.toLowerCase();
      $$('.combobox-option', cb).forEach(function (opt) {
        var text = opt.textContent.toLowerCase();
        opt.style.display = text.includes(val) ? '' : 'none';
      });
    });

    on(document, 'click', '.combobox-option', function () {
      var cb = this.closest('.combobox');
      if (!cb) return;
      var inp = $('.combobox-input', cb);
      if (inp) inp.value = this.textContent.trim();
      $$('.combobox-option', cb).forEach(function (o) { o.removeAttribute('data-selected'); });
      this.setAttribute('data-selected', '');
      cb.setAttribute('data-state', 'closed');
    });

    on(document, 'click', function (e) {
      $$('.combobox[data-state="open"]').forEach(function (cb) {
        if (!cb.contains(e.target)) cb.setAttribute('data-state', 'closed');
      });
    });
  }
