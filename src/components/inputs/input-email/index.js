import PubSub from 'pubsub-js';
import BaseInput from 'components/__shared/base-input';
import 'components/__shared/base-input/style.scss'; // css
import validationEmail from './validation-email';
import template from './template.hbs'; // template


export default class InputEmail extends BaseInput {
  constructor({
    el,
    componentName,
    id,
    events,
  }) {
    super({ el });

    this.render({ componentName, id });
    this.elements.input = document.querySelector(`[data-component="${componentName}"]`);

    this.addEvents({ events });
  }

  render({ componentName, id }) {
    this.el.innerHTML = template({ componentName, id });
  }

  addEvents({ events }) {
    this.eventsPubSub.validation = PubSub.subscribe(events.subscribeValidation, this.onValidation.bind(this, { events }));
    this.eventsPubSub.setFocus = PubSub.subscribe(events.subscribeSetFocus, this.onSetFocus.bind(this));
  }

  removeEvents() {
    this.unsubscribe();
  }

  onValidation({ events }) {
    const emailStatus = validationEmail({ value: this.elements.input.value });
    PubSub.publish(events.publishValidation, {
      status: emailStatus,
      data: this.elements.input.value,
    });
    this.backlightValid({ isValid: emailStatus.isValid });
  }
}
