import BaseInput from 'components/__shared/base-input';
import 'components/__shared/base-input/style.scss'; // css
import validationName from './validation-name';
import template from './template.hbs'; // template


export default class InputName extends BaseInput {
  constructor({ el, componentName, id }) {
    super({ el });

    this.render({ componentName, id });
    this.elements.input = document.querySelector(`[data-component="${componentName}"]`);
  }

  render({ componentName, id }) {
    this.el.innerHTML = template({ componentName, id });
  }

  validation() {
    const nameStatus = validationName({ value: this.elements.input.value });
    this.backlightValid({ isValid: nameStatus.isValid });
    return nameStatus;
  }
}
