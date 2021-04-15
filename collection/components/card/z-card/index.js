import { Component, h, Prop } from "@stencil/core";
import { LicenseTypeEnum } from "../../../beans/index";
/**
 * @slot  - generic card slot
 */
export class ZCardComponent {
  constructor() {
    /** pressed status */
    this.ispressed = false;
    /** highlighted status */
    this.ishighlighted = false;
  }
  retrieveClass() {
    let elemClasses = "";
    if (this.cardtype === LicenseTypeEnum.real)
      elemClasses += "real";
    else if (this.cardtype === LicenseTypeEnum.trial)
      elemClasses += "trial";
    if (this.faded) {
      elemClasses += " faded";
    }
    else if (this.ispressed) {
      elemClasses += " pressed";
    }
    else if (this.ishighlighted) {
      elemClasses += " highlighted";
    }
    return elemClasses;
  }
  render() {
    return (h("div", { class: this.retrieveClass(), tabindex: "0" },
      h("slot", null)));
  }
  static get is() { return "z-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "faded": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "faded status"
      },
      "attribute": "faded",
      "reflect": false
    },
    "cardtype": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LicenseTypeEnum",
        "resolved": "LicenseTypeEnum.real | LicenseTypeEnum.trial | LicenseTypeEnum.virtual",
        "references": {
          "LicenseTypeEnum": {
            "location": "import",
            "path": "../../../beans/index"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "graphic variant (optional)"
      },
      "attribute": "cardtype",
      "reflect": false
    },
    "ispressed": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "pressed status"
      },
      "attribute": "ispressed",
      "reflect": false,
      "defaultValue": "false"
    },
    "ishighlighted": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "highlighted status"
      },
      "attribute": "ishighlighted",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}