import BaseComponent from 'sharedDriver/js/base/base-component';

export default class InputEmail extends BaseComponent {
  constructor({ el }) {
    super({ el });
    this.eventsPubSub = {};
  }

  backlightValid({ isValid }) {
    if (isValid) {
      this.elements.input.classList.remove('input_invalid');
      return;
    }
    this.elements.input.classList.add('input_invalid');
  }

  onSetFocus() {
    this.elements.input.focus();
  }
}
