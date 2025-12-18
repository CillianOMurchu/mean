/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from 'stencil-library';


@ProxyCmp({
  inputs: ['category', 'images', 'isSale', 'price', 'productTitle']
})
@Component({
  selector: 'peach-product-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['category', 'images', 'isSale', 'price', 'productTitle'],
  outputs: ['addToCart'],
  standalone: false
})
export class PeachProductCard {
  protected el: HTMLPeachProductCardElement;
  @Output() addToCart = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PeachProductCard extends Components.PeachProductCard {

  addToCart: EventEmitter<CustomEvent<any>>;
}


