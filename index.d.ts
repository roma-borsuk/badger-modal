// Type definitions for Badger Modal 0.0.1
// Project: https://github.com/roma-borsuk/badger-modal
// Definitions by: Borsuk Roman <https://github.com/roma-borsuk>

declare class Modal {
  constructor(element?: string|HTMLElement|Element);

  show(): void;

  hide(): void;

  onShow(callback: () => void): void;

  onHide(callback: () => void): void;

  onShown(callback: () => void): void;

  onHidden(callback: () => void): void;
}

export = Modal;