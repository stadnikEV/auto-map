import BaseInput from 'components/__shared/base-input';
import 'components/__shared/base-input/style.scss'; // css
import validationEmail from './validation-email';
import template from './template.hbs'; // template


export default class InputEmail extends BaseInput {
  constructor({
    el,
    componentName,
    id,
  }) {
    super({ el });

    this.render({ componentName, id });
    this.elements.input = document.querySelector(`[data-component="${componentName}"]`);
  }

  render({ componentName, id }) {
    this.el.innerHTML = template({ componentName, id });
  }

  validation() {
    const emailStatus = validationEmail({ value: this.elements.input.value });
    this.backlightValid({ isValid: emailStatus.isValid });
    return emailStatus;
  }
}
