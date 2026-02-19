# RanjuUI - Build System

.PHONY: dist css js clean size

CSS_FILES = src/css/00-base.css \
	src/css/01-typography.css \
	src/css/grid.css \
	src/css/avatar.css \
	src/css/accordion.css \
	src/css/alert.css \
	src/css/badge.css \
	src/css/breadcrumb.css \
	src/css/button.css \
	src/css/card.css \
	src/css/carousel.css \
	src/css/checkbox.css \
	src/css/collapsible.css \
	src/css/combobox.css \
	src/css/command.css \
	src/css/context-menu.css \
	src/css/table.css \
	src/css/dialog.css \
	src/css/dropdown.css \
	src/css/empty-state.css \
	src/css/form.css \
	src/css/hover-card.css \
	src/css/kbd.css \
	src/css/menubar.css \
	src/css/meter.css \
	src/css/pagination.css \
	src/css/popover.css \
	src/css/progress.css \
	src/css/resizable.css \
	src/css/scroll-area.css \
	src/css/separator.css \
	src/css/sidebar.css \
	src/css/skeleton.css \
	src/css/slider.css \
	src/css/spinner.css \
	src/css/switch.css \
	src/css/tabs.css \
	src/css/toast.css \
	src/css/tooltip.css \
	src/css/calendar.css \
	src/css/utilities.css \
	src/css/responsive.css

JS_FILES = src/js/base.js \
	src/js/accordion.js \
	src/js/alert.js \
	src/js/collapsible.js \
	src/js/dialog.js \
	src/js/dropdown.js \
	src/js/context-menu.js \
	src/js/tabs.js \
	src/js/toast.js \
	src/js/tooltip.js \
	src/js/popover.js \
	src/js/combobox.js \
	src/js/command.js \
	src/js/carousel.js \
	src/js/table.js \
	src/js/calendar.js \
	src/js/sidebar.js \
	src/js/resizable.js \
	src/js/toggle.js \
	src/js/init.js

dist: css js size

css:
	@cat $(CSS_FILES) > ranju.css
	@echo "CSS: $$(wc -c < ranju.css | tr -d ' ') bytes"

js:
	@cat $(JS_FILES) > ranju.js
	@echo "JS: $$(wc -c < ranju.js | tr -d ' ') bytes"

clean:
	@rm -f ranju.css ranju.js

size:
	@echo ""
	@echo "Bundle:"
	@echo "CSS: $$(wc -c < ranju.css | tr -d ' ') bytes"
	@echo "JS:  $$(wc -c < ranju.js | tr -d ' ') bytes"
