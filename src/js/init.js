  function init() {
    Ranju.theme.init();
    initAccordion();
    initAlert();
    initCollapsible();
    initDialog();
    initDropdown();
    initContextMenu();
    initTabs();
    initTooltip();
    initPopover();
    initCombobox();
    initCommand();
    initCarousel();
    initDataTable();
    initSidebar();
    initResizable();
    initToggle();

    $$('.calendar').forEach(function (el) {
      if (!el.hasAttribute('data-manual')) Ranju.calendar(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
