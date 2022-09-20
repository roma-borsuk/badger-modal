import EventEmitter from 'eventemitter3';

import './index.scss';

const isElement = (obj) => {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return typeof obj.nodeType !== 'undefined';
};

const getElement = (obj) => {
    if (isElement(obj)) {
        return obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
        return document.querySelector(obj);
    }

    return null;
};

export const Modal = class {
    #element;
    #dialog;
    #dismissEls;
    #eventEmitter;

    #shown = () => {
        this.#eventEmitter.emit('shown');

        this.#element.removeEventListener('transitionend', this.#shown);
    };
    #hidden = () => {
        this.#element.style.display = 'none';
        this.#element.setAttribute('aria-hidden', '');
        this.#element.removeAttribute('aria-modal');
        this.#element.removeAttribute('role');
        document.documentElement.classList.remove('is-modal-open');

        this.#eventEmitter.emit('hidden');

        this.#element.removeEventListener('transitionend', this.#hidden);
        this.#element.removeEventListener('click', this.#modalClick);
        document.removeEventListener('keyup', this.#escClick);
        this.#dismissEls.forEach(el => {
            el.removeEventListener('click', this.#dismissClick);
        });
    };
    #modalClick = (e) => {
        const element = e.target;

        if (element === this.#element) {
            this.hide();
        }
    };
    #dismissClick = (e) => {
        e.preventDefault();
        this.hide();
    };
    #escClick = (e) => {
        if (e.key === "Escape") {
            this.hide();
        }
    };

    static instances = new Map();

    static getInstance(element) {
        return Modal.instances.get(element);
    }

    constructor(element) {
        this.#element = getElement(element);

        if (!this.#element) {
            throw new Error(`Modal element ${element} doesn't exist.`);
        }

        this.#eventEmitter = new EventEmitter();

        Modal.instances.set(this.#element, this);

        this.#dialog = this.#element.querySelector('.m-dialog');
        this.#dismissEls = this.#element.querySelectorAll('[data-modal-dismiss]');
    }

    show() {
        this.#eventEmitter.emit('show');

        document.documentElement.classList.add('is-modal-open');

        this.#element.style.display = 'block';
        this.#element.removeAttribute('aria-hidden');
        this.#element.setAttribute('aria-modal', '');
        this.#element.setAttribute('role', 'dialog');
        this.#element.scrollTop = 0;

        this.#element.classList.add('is-shown');

        this.#dismissEls.forEach(el => {
            el.addEventListener('click', this.#dismissClick, false);
        });
        this.#element.addEventListener('click', this.#modalClick, false);
        document.addEventListener('keyup', this.#escClick, false);
        this.#element.addEventListener('transitionend', this.#shown, false);
    }

    hide() {
        this.#eventEmitter.emit('hide');

        this.#element.classList.remove('is-shown');
        this.#element.addEventListener('transitionend', this.#hidden, false);
    }

    onShow(callback) {
        this.#eventEmitter.on('show', callback);
        return () => this.#eventEmitter.off('show', callback);
    }

    onHide(callback) {
        this.#eventEmitter.on('hide', callback);
        return () => this.#eventEmitter.off('hide', callback);
    }

    onShown(callback) {
        this.#eventEmitter.on('shown', callback);
        return () => this.#eventEmitter.off('shown', callback);
    }

    onHidden(callback) {
        this.#eventEmitter.on('hidden', callback);
        return () => this.#eventEmitter.off('hidden', callback);
    }
};

export default Modal;
