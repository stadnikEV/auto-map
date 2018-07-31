import BaseComponent from 'components/__shared/base-component';
import template from './template.hbs'; // template
import './style.scss'; // css

export default class TipInline extends BaseComponent {
  constructor({ el, componentName }) {
    super({ el });

    this.render({ componentName });
    this.elements.TipInline = document.querySelector(`[data-component="${componentName}"]`);
  }

  render({ componentName }) {
    this.el.innerHTML = template({
      componentName,
    });
  }

  showTip({ message }) {
    this.elements.TipInline.innerHTML = message;
  }
}
