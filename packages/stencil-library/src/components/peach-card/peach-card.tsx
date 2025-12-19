import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'peach-card',
  styleUrl: 'peach-card.css',
  shadow: true,
})
export class PeachCard {
  /** Image source URL */
  @Prop() imgSrc = '';
  /** Product Name */
  @Prop() productName = '';
  /** Regular Price */
  @Prop() price: number | null = null;
  /** Optional Sale Price */
  @Prop() salePrice?: number;
  /** Optional Badge text (e.g. 'Sale', 'New') */
  @Prop() badge? = '';
  /** Currency symbol */
  @Prop() currency: string = '€';

  private formatPrice(val: number | null) {
    if (val === null) return '';
    
    return val.toLocaleString('en-EN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  render() {
   const isOnSale = 
      typeof this.salePrice === 'number' &&
      typeof this.price === 'number' &&
      this.salePrice < this.price;

    return (
      <Host>
        <div class="card">
          <div class="card__image-container">
            {this.imgSrc ? <img src={this.imgSrc} alt={this.productName} class="card__image" /> : <div class="card__image-placeholder" />}

            {this.badge && (
              <div class="card__badge bottom left">
                <span class="badge">{this.badge}</span>
              </div>
            )}
          </div>

          <div class="card__content">
            <div class="card__information">
              <h3 class="card__heading" id="title-product-detail">
                {this.productName}
              </h3>

              <div class="card-information">
                <div class={isOnSale ? 'price price--on-sale' : 'price'}>
                  <div class="price__container">
                    {/* Regular Price (Stripped through if on sale) */}
                    <div class="price__regular">
                      <span class="visually-hidden">Regular price</span>
                      <span class="price-item price-item--regular">
                        {isOnSale ? (
                          <s>
                            {this.currency}
                            {this.formatPrice(this.price)}
                          </s>
                        ) : (
                          `${this.currency}${this.formatPrice(this.price)}`
                        )}
                      </span>
                    </div>

                    {/* Sale Price (Displayed only if on sale) */}
                    {isOnSale && (
                      <div class="price__sale">
                        <span class="visually-hidden">Sale price</span>
                        <span class="price-item price-item--sale">
                          {this.currency}
                          {this.formatPrice(this.salePrice!)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class="card__actions">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
