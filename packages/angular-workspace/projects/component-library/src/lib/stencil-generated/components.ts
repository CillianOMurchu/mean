/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'stencil-library/components';

import { defineCustomElement as definePeachButton } from 'stencil-library/components/peach-button.js';
import { defineCustomElement as definePeachCard } from 'stencil-library/components/peach-card.js';
import { defineCustomElement as definePeachInput } from 'stencil-library/components/peach-input.js';
import { defineCustomElement as definePeachSmiley } from 'stencil-library/components/peach-smiley.js';
import { defineCustomElement as definePeachStatusBadge } from 'stencil-library/components/peach-status-badge.js';
@ProxyCmp({
  defineCustomElementFn: definePeachButton,
  inputs: ['disabled', 'variant']
})
@Component({
  selector: 'peach-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'variant'],
  outputs: ['peachClick'],
})
export class PeachButton {
  protected el: HTMLPeachButtonElement;
  @Output() peachClick = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PeachButton extends Components.PeachButton {
  /**
   * Emitted when the button is clicked
   */
  peachClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: definePeachCard,
  inputs: ['badge', 'currency', 'imgSrc', 'price', 'productName', 'salePrice']
})
@Component({
  selector: 'peach-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['badge', 'currency', 'imgSrc', 'price', 'productName', 'salePrice'],
})
export class PeachCard {
  protected el: HTMLPeachCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PeachCard extends Components.PeachCard {}


@ProxyCmp({
  defineCustomElementFn: definePeachInput,
  inputs: ['label', 'placeholder', 'value']
})
@Component({
  selector: 'peach-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'placeholder', 'value'],
  outputs: ['valueChange'],
})
export class PeachInput {
  protected el: HTMLPeachInputElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PeachInput extends Components.PeachInput {
  /**
   * Emitted when the value changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: definePeachSmiley
})
@Component({
  selector: 'peach-smiley',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class PeachSmiley {
  protected el: HTMLPeachSmileyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PeachSmiley extends Components.PeachSmiley {}


@ProxyCmp({
  defineCustomElementFn: definePeachStatusBadge,
  inputs: ['label', 'status']
})
@Component({
  selector: 'peach-status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'status'],
})
export class PeachStatusBadge {
  protected el: HTMLPeachStatusBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PeachStatusBadge extends Components.PeachStatusBadge {}


