import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonFilter {
  /** filter text content */
  @Prop() filtername: string;
  /** disable action on button */
  @Prop() isfixed: boolean = false;
  /** add icon to button */
  @Prop() hasicon: boolean = true;
  /** filter id */
  @Prop() filterid: string;
  /** reduce button size (optional) */
  @Prop() issmall?: boolean = false;

  /** remove filter click event, returns filterid */
  @Event({
    eventName: "removefilter",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  removefilter: EventEmitter;

  constructor() {
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }

  handleRemovingFilterClick(): void {
    this.removefilter.emit({
      filterid: this.filterid
    });
  }

  renderFixedPillow(filtername) {
    return (
      <button class={`container ${this.issmall ? "small" : ""}`}>
        {this.hasicon && (
          <z-icon
            class="close-icon-container"
            name="close"
            height={12}
            width={12}
          />
        )}
        <span class="text-container">{filtername}</span>
      </button>
    );
  }

  renderDynamicPillow(filtername) {
    return (
      <button
        class={`container isactive ${this.issmall ? "small" : ""}`}
        onClick={this.handleRemovingFilterClick}
      >
        {this.hasicon && (
          <z-icon
            class="close-icon-container"
            name="close"
            height={12}
            width={12}
          />
        )}
        <span class="text-container">{filtername}</span>
      </button>
    );
  }

  render() {
    if (this.isfixed) {
      return this.renderFixedPillow(this.filtername);
    }

    return this.renderDynamicPillow(this.filtername);
  }
}
