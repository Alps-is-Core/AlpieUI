  function initTooltip() {
    $$('[data-tooltip]').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        var text = this.getAttribute('data-tooltip');
        if (!text || this._tip) return;
        var tip = document.createElement('div');
        tip.className = 'tooltip-content';
        tip.style.opacity = '1';
        tip.style.pointerEvents = 'none';
        tip.style.position = 'absolute';
        tip.textContent = text;
        this.style.position = 'relative';
        this.appendChild(tip);
        this._tip = tip;
      });
      el.addEventListener('mouseleave', function () {
        if (this._tip) { this._tip.remove(); this._tip = null; }
      });
    });
  }
