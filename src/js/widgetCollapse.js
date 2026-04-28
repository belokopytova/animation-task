export default class WidgetCollapse {
  constructor() {
    this.container = document.querySelector('.main_container');
  }

  static clickEvent(e) {
    if (e.target.dataset.id !== 'widgetButton') return;
    const widgetFooter = e.currentTarget.querySelector('.widget_footer');
    widgetFooter.classList.toggle('collapse');
    widgetFooter.classList.toggle('show');
  }

  init() {
    this.initWidget();
  }

  initWidget() {
    if (!this.container) return;
    this.container.innerHTML = `
    <div data-widget="widgetCollapse" class="widget widget_collapse">
      <div class="widget_controls">
        <button data-id="widgetButton" class="widget_button">Collapse</button>
      </div>
      <div data-id="widgetFooter" class="widget_footer collapse">
        <div class="widget_footer_text">
        Через минуту они прошли сонную конторку, вышли на глубокий, по ступицу, песок и молча сели в запыленную извозчичью пролетку.
        </div>
      </div>
      <div class="widget_copy">Copy</div>
    </div>
    `;

    this.container
      .querySelector('.widget_collapse')
      .addEventListener('click', (e) => {
        WidgetCollapse.clickEvent(e);
      });
  }

  destroy() {
    if (this.widget) {
      this.widget.removeEventListener('click', this.handleClick);
    }
  }
}
