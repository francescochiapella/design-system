import { Component, h } from "@stencil/core";

@Component({
  tag: "z-card-body",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardBody {
  render() {
    return (
      <div>
        <slot name="cover" />
      </div>
    );
  }
}