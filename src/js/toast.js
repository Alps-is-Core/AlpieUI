  var toastDefaults = { duration: 4000, position: 'bottom-right' };

  function getContainer(pos) {
    var existing = $('.toast-container.' + pos);
    if (existing) return existing;
    var c = document.createElement('div');
    c.className = 'toast-container ' + pos;
    document.body.appendChild(c);
    return c;
  }

  Ranju.toast = function (opts) {
    if (typeof opts === 'string') opts = { title: opts };
    opts = Object.assign({}, toastDefaults, opts);

    var container = getContainer(opts.position);
    var toast = document.createElement('div');
    toast.className = 'toast' + (opts.variant ? ' toast-' + opts.variant : '');

    var iconSvg = '';
    if (opts.variant === 'success') iconSvg = '<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>';
    else if (opts.variant === 'destructive') iconSvg = '<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>';
    else if (opts.variant === 'warning') iconSvg = '<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>';

    toast.innerHTML =
      iconSvg +
      '<div class="toast-content">' +
        (opts.title ? '<div class="toast-title">' + opts.title + '</div>' : '') +
        (opts.description ? '<div class="toast-description">' + opts.description + '</div>' : '') +
      '</div>' +
      '<button class="toast-close" aria-label="Close">&times;</button>';

    container.appendChild(toast);

    var closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', function () { removeToast(toast); });

    if (opts.duration > 0) {
      setTimeout(function () { removeToast(toast); }, opts.duration);
    }
    return toast;
  };

  function removeToast(t) {
    if (t._removing) return;
    t._removing = true;
    t.classList.add('toast-leaving');
    setTimeout(function () { t.remove(); }, 200);
  }
