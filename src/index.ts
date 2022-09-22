import EventEmitter from 'eventemitter3';

const isElement = (obj: any) => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  return typeof obj.nodeType !== 'undefined';
};

const getElement = (obj: any): HTMLElement|null => {
  if (isElement(obj)) {
    return obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

export default class Modal {
  #element: HTMLElement;
  #dialog: HTMLElement;
  #dismissEls: NodeListOf<HTMLElement>;
  #eventEmitter: EventEmitter;

  #shown = () => {
    const self = this;
    self.#eventEmitter.emit('shown');
    self.#element.removeEventListener('transitionend', this.#shown);
  };
  #hidden = () => {
    const self = this;
    self.#element.style.display = 'none';
    self.#element.setAttribute('aria-hidden', '');
    self.#element.removeAttribute('aria-modal');
    self.#element.removeAttribute('role');
    document.documentElement.classList.remove('is-modal-open');

    self.#eventEmitter.emit('hidden');

    self.#element.removeEventListener('transitionend', self.#hidden);
    self.#element.removeEventListener('click', self.#modalClick);
    document.removeEventListener('keyup', self.#escClick);
    self.#dismissEls.forEach(el => {
      el.removeEventListener('click', self.#dismissClick);
    });
  };
  #modalClick = (e: Event) => {
    const self = this;
    const element = e.target as HTMLElement;

    if (element === self.#element) {
      self.hide();
    }
  };
  #dismissClick = (e: Event) => {
    const self = this;
    e.preventDefault();
    self.hide();
  };
  #escClick = (e: KeyboardEvent) => {
    const self = this;
    if (e.key === "Escape") {
      self.hide();
    }
  };

  static instances: Map<HTMLElement, Modal> = new Map();

  static getInstance(element: HTMLElement) {
    return Modal.instances.get(element);
  }

  constructor(element: HTMLElement | string) {
    this.#element = getElement(element)!;

    if (!this.#element) {
      throw new Error(`Modal element ${element} doesn't exist.`);
    }

    this.#eventEmitter = new EventEmitter();

    Modal.instances.set(this.#element, this);

    this.#dialog = this.#element.querySelector('.m-dialog')!;
    this.#dismissEls = this.#element.querySelectorAll('[data-modal-dismiss]')!;
  }

  show() {
    const self = this;
    self.#eventEmitter.emit('show');

    document.documentElement.classList.add('is-modal-open');

    self.#element.style.display = 'block';
    self.#element.removeAttribute('aria-hidden');
    self.#element.setAttribute('aria-modal', '');
    self.#element.setAttribute('role', 'dialog');
    self.#element.scrollTop = 0;

    self.#element.classList.add('is-shown');

    self.#dismissEls.forEach(el => {
      el.addEventListener('click', self.#dismissClick, false);
    });
    self.#element.addEventListener('click', self.#modalClick, false);
    document.addEventListener('keyup', self.#escClick, false);
    self.#element.addEventListener('transitionend', self.#shown, false);
  }

  hide() {
    const self = this;
    self.#eventEmitter.emit('hide');

    self.#element.classList.remove('is-shown');
    self.#element.addEventListener('transitionend', self.#hidden, false);
  }

  onShow(callback: () => void) {
    const self = this;
    self.#eventEmitter.on('show', callback);
    return () => self.#eventEmitter.off('show', callback);
  }

  onHide(callback: () => void) {
    const self = this;
    self.#eventEmitter.on('hide', callback);
    return () => self.#eventEmitter.off('hide', callback);
  }

  onShown(callback: () => void) {
    const self = this;
    self.#eventEmitter.on('shown', callback);
    return () => self.#eventEmitter.off('shown', callback);
  }

  onHidden(callback: () => void) {
    const self = this;
    self.#eventEmitter.on('hidden', callback);
    return () => self.#eventEmitter.off('hidden', callback);
  }
};
