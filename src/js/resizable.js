  function initResizable() {
    $$('.resizable-handle').forEach(function (handle) {
      var dragging = false;
      var prev, startX, startY, startW, startH;

      handle.addEventListener('mousedown', function (e) {
        dragging = true;
        prev = handle.previousElementSibling;
        startX = e.clientX;
        startY = e.clientY;
        var rect = prev.getBoundingClientRect();
        startW = rect.width;
        startH = rect.height;
        document.body.style.cursor = handle.closest('.resizable-vertical') ? 'row-resize' : 'col-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
      });

      document.addEventListener('mousemove', function (e) {
        if (!dragging) return;
        if (handle.closest('.resizable-vertical')) {
          prev.style.height = (startH + (e.clientY - startY)) + 'px';
          prev.style.flex = 'none';
        } else {
          prev.style.width = (startW + (e.clientX - startX)) + 'px';
          prev.style.flex = 'none';
        }
      });

      document.addEventListener('mouseup', function () {
        if (dragging) {
          dragging = false;
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
        }
      });
    });
  }
