import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'peach-product-card',
  styleUrl: 'peach-product-card.css',
  shadow: true,
})
export class PeachProductCard {
  /** Array of product image URLs */
  @Prop() images: string[] = [];
  /** The product title */
  @Prop() productTitle: string = 'Premium Peach Nutrition';
  /** The category badge text */
  @Prop() category: string = 'Supplement';
  /** The price display */
  @Prop() price: string = '$0.00';
  /** Indicates if the product is on sale */
  @Prop() isSale: boolean = false;

  @State() currentImageIndex: number = 0;

  @Event() addToCart: EventEmitter<void> | null = null;

  private nextImage(e: MouseEvent) {
    e.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  private prevImage(e: MouseEvent) {
    e.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  render() {
    const hasMultipleImages = this.images && this.images.length > 1;

    return (
      <Host>
        <div class="card-container">
          <div class="image-wrapper">
            {this.isSale && <span class="badge">Sale</span>}

            <div class="image-track" style={{ transform: `translateX(-${this.currentImageIndex * 100}%)` }}>
              {this.images && this.images.length > 0 ? (
                this.images.map(src => <img src={src} alt={this.productTitle} loading="lazy" />)
              ) : (
                <div class="placeholder">No Image Available</div>
              )}
            </div>

            {hasMultipleImages && (
              <div class="carousel-controls">
                <button class="nav-btn prev" type="button" aria-label="Previous image" onClick={e => this.prevImage(e)}>
                  ‹
                </button>
                <button class="nav-btn next" type="button" aria-label="Next image" onClick={e => this.nextImage(e)}>
                  ›
                </button>
                <div class="dots">
                  {this.images.map((_, i) => (
                    <span class={{ dot: true, active: i === this.currentImageIndex }}></span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div class="content">
            <span class="category-label">{this.category}</span>
            <h3 class="title">{this.productTitle}</h3>

            <div class="footer">
              <span class="price-tag">{this.price}</span>
              <button class="action-btn" type="button" onClick={() => this.addToCart?.emit()}>
                <slot name="button-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </slot>
                Add
              </button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
