  Ranju.calendar = function (el, opts) {
    opts = opts || {};
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    var selected = null;
    var days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    function render() {
      var first = new Date(year, month, 1);
      var last = new Date(year, month + 1, 0);
      var startDay = first.getDay();
      var monthName = first.toLocaleString('default', { month: 'long', year: 'numeric' });

      var html = '<div class="calendar-header">' +
        '<button class="calendar-nav" data-cal-prev>&#8249;</button>' +
        '<span class="calendar-title">' + monthName + '</span>' +
        '<button class="calendar-nav" data-cal-next>&#8250;</button>' +
        '</div><div class="calendar-grid">';

      days.forEach(function (d) { html += '<div class="calendar-day-header">' + d + '</div>'; });

      var prevLast = new Date(year, month, 0).getDate();
      for (var i = startDay - 1; i >= 0; i--) {
        html += '<div class="calendar-day other-month">' + (prevLast - i) + '</div>';
      }
      for (var d = 1; d <= last.getDate(); d++) {
        var cls = 'calendar-day';
        if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) cls += ' today';
        if (selected && d === selected.getDate() && month === selected.getMonth() && year === selected.getFullYear()) cls += ' selected';
        html += '<div class="' + cls + '" data-day="' + d + '">' + d + '</div>';
      }
      var rem = 42 - (startDay + last.getDate());
      for (var i = 1; i <= rem; i++) {
        html += '<div class="calendar-day other-month">' + i + '</div>';
      }
      html += '</div>';
      el.innerHTML = html;

      el.querySelector('[data-cal-prev]').addEventListener('click', function () {
        month--; if (month < 0) { month = 11; year--; } render();
      });
      el.querySelector('[data-cal-next]').addEventListener('click', function () {
        month++; if (month > 11) { month = 0; year++; } render();
      });
      $$('.calendar-day:not(.other-month)', el).forEach(function (dayEl) {
        dayEl.addEventListener('click', function () {
          selected = new Date(year, month, parseInt(this.getAttribute('data-day')));
          render();
          if (opts.onSelect) opts.onSelect(selected);
        });
      });
    }
    render();
  };
