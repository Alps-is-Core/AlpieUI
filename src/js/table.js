  function initDataTable() {
    on(document, 'click', 'th[data-sortable]', function () {
      var table = this.closest('table');
      if (!table) return;
      var colIdx = Array.from(this.parentElement.children).indexOf(this);
      var tbody = table.querySelector('tbody') || table;
      var rows = Array.from(tbody.querySelectorAll('tr'));
      var dir = this.getAttribute('data-sort') === 'asc' ? 'desc' : 'asc';

      $$('th[data-sortable]', table).forEach(function (h) { h.removeAttribute('data-sort'); });
      this.setAttribute('data-sort', dir);

      rows.sort(function (a, b) {
        var cellA = (a.children[colIdx] || {}).textContent || '';
        var cellB = (b.children[colIdx] || {}).textContent || '';
        var numA = parseFloat(cellA);
        var numB = parseFloat(cellB);
        if (!isNaN(numA) && !isNaN(numB)) {
          return dir === 'asc' ? numA - numB : numB - numA;
        }
        return dir === 'asc' ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
      });

      rows.forEach(function (r) { tbody.appendChild(r); });
    });
  }
