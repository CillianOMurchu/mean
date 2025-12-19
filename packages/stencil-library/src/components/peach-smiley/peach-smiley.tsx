import { Component, Element, Host, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'peach-smiley',
  styleUrl: 'peach-smiley.css',
  shadow: true,
})
export class PeachSmiley {
  @Element() el!: HTMLElement;

  @State() pupilTransform = 'translate(0, 0)';
  @State() mouthPath = 'M 30 70 Q 50 70 70 70';
  @State() isVeryHappy = false;
  @State() blushOpacity = 0;

  private timer: any;

  @Listen('mousemove', { target: 'window' })
  handleMouseMove(ev: MouseEvent) {
    if (!this.el) return;

    const rect = this.el.getBoundingClientRect();

    // 1. Find the center of the face
    const faceCenterX = rect.left + rect.width / 2;
    const faceCenterY = rect.top + rect.height / 2;

    // 2. Calculate Distance and Angle
    const deltaX = ev.clientX - faceCenterX;
    const deltaY = ev.clientY - faceCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX);

    // 3. Update Eyes (Limit movement to 4px radius)
    const moveX = Math.cos(angle) * 4;
    const moveY = Math.sin(angle) * 4;
    this.pupilTransform = `translate(${moveX}px, ${moveY}px)`;

    // 4. Expression Logic
    this.handleExpression(distance);
  }

  handleExpression(distance: number) {
    if (this.timer) clearTimeout(this.timer);

    if (distance < 50) {
      // VERY CLOSE: HAPPY BEAM (Blush + Closed Eyes)
      this.mouthPath = 'M 30 70 Q 50 90 70 70';
      this.isVeryHappy = true;
      this.blushOpacity = 0.6;
    } 
    else if (distance < 150) {
      // CLOSE: SMILE (Deep curve down)
      this.mouthPath = 'M 30 70 Q 50 85 70 70';
      this.isVeryHappy = false;
      this.blushOpacity = 0;
    } 
    else if (distance > 350) {
      // FAR: FROWN (Curve up)
      this.mouthPath = 'M 30 70 Q 50 55 70 70';
      this.isVeryHappy = false;
      this.blushOpacity = 0;
      
      // Stay frowning for a bit, then return to neutral if the mouse stays far away
      this.timer = setTimeout(() => {
        this.mouthPath = 'M 30 70 Q 50 70 70 70';
      }, 2000);
    } 
    else {
      // MID-RANGE: NEUTRAL (Flat line)
      this.mouthPath = 'M 30 70 Q 50 70 70 70';
      this.isVeryHappy = false;
      this.blushOpacity = 0;
    }
  }

  render() {
    return (
      <Host>
        <div class="face-wrapper">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle class="face-skin" cx="50" cy="50" r="48" />

            {/* Blush cheeks */}
            <circle class="blush" cx="25" cy="55" r="8" fill="#ff9999" style={{ opacity: `${this.blushOpacity}`, transition: 'opacity 0.3s' }} />
            <circle class="blush" cx="75" cy="55" r="8" fill="#ff9999" style={{ opacity: `${this.blushOpacity}`, transition: 'opacity 0.3s' }} />

            {this.isVeryHappy ? (
              <g class="eyes-closed">
                {/* Left Closed Eye (Happy Beam) */}
                <path d="M 24 40 Q 32 32 40 40" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" />
                {/* Right Closed Eye (Happy Beam) */}
                <path d="M 60 40 Q 68 32 76 40" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" />
              </g>
            ) : (
              <g class="eyes-open">
                {/* Left Eye */}
                <circle class="eye-white" cx="32" cy="40" r="8" />
                <circle class="pupil" cx="32" cy="40" r="4" style={{ transform: this.pupilTransform }} />

                {/* Right Eye */}
                <circle class="eye-white" cx="68" cy="40" r="8" />
                <circle class="pupil" cx="68" cy="40" r="4" style={{ transform: this.pupilTransform }} />
              </g>
            )}

            <path class="mouth" d={this.mouthPath} fill="none" stroke="black" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
      </Host>
    );
  }
}