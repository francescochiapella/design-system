import { Component, Element, h } from "@stencil/core";
export class ZRegistroTableFooter {
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-registro-table-footer"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get elementRef() { return "host"; }
}
