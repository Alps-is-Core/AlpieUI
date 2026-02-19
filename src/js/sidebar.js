  function initSidebar() {
    on(document, 'click', '[data-sidebar-toggle]', function () {
      var id = this.getAttribute('data-sidebar-toggle');
      var sidebar = document.getElementById(id) || $('.sidebar');
      if (sidebar) sidebar.classList.toggle('sidebar-collapsed');
    });
  }
