import { r as registerInstance, h } from './index-06b54d7b.js';

const ZBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    return (h("z-typography", { component: this.component || "span", level: `b${this.level}`, variant: this.variant }, h("slot", null)));
  }
};

export { ZBody as z_body };