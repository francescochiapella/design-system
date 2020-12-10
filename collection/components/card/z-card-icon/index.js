import { Component, Prop, h } from "@stencil/core";
export class ZCardIcon {
    constructor() {
        /** disabled status flag */
        this.isdisabled = false;
    }
    render() {
        return (h("button", { disabled: this.isdisabled },
            h("span", null,
                h("z-icon", { name: this.icon, width: 16, height: 16 }))));
    }
    static get is() { return "z-card-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "icon name"
            },
            "attribute": "icon",
            "reflect": false
        },
        "isdisabled": {
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
                "text": "disabled status flag"
            },
            "attribute": "isdisabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
