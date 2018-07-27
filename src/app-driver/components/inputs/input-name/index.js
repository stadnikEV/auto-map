import PubSub from 'pubsub-js';
import BaseInput from 'sharedDriver/js/base/base-input';
import 'sharedDriver/css/components/input.scss'; // css
import validationName from './validation-name';
import template from './template.hbs'; // template


export default class InputName extends BaseInput {
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
    const nameStatus = validationName({ value: this.elements.input.value });
    PubSub.publish(events.publishValidation, {
      status: nameStatus,
      data: this.elements.input.value,
    });
    this.backlightValid({ isValid: nameStatus.isValid });
  }
}
