/* tslint:disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { defineCustomElement as definePeachStatusBadge } from 'stencil-library/components/peach-status-badge.js';
import { Components } from '../../../../../../stencil-library/dist/types/components';
@ProxyCmp({
  defineCustomElementFn: definePeachStatusBadge,
  inputs: ['label', 'status'],
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
  constructor(
    c: ChangeDetectorRef,
    r: ElementRef,
    protected z: NgZone,
  ) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface PeachStatusBadge extends Components.PeachStatusBadge {}
