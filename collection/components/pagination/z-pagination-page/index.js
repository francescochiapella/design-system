import { Component, Prop, h } from "@stencil/core";
export class ZPaginationPage {
    constructor() {
        /** selected status flag */
        this.isselected = false;
        /** disabled status flag */
        this.isdisabled = false;
        /** visited status flag */
        this.isvisited = false;
    }
    render() {
        return (h("a", { id: this.pageid, ref: el => (this.page = el), class: `${this.isselected && "selected"} ${this.isdisabled &&
                "disabled"} ${this.isvisited && "visited"}`, tabindex: this.isdisabled ? -1 : 0, role: "button" }, this.value));
    }
    static get is() { return "z-pagination-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "pageid": {
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
                "text": "anchor html id"
            },
            "attribute": "pageid",
            "reflect": false
        },
        "value": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "numeric page value (optional)"
            },
            "attribute": "value",
            "reflect": false
        },
        "isselected": {
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
                "text": "selected status flag"
            },
            "attribute": "isselected",
            "reflect": false,
            "defaultValue": "false"
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
        },
        "isvisited": {
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
                "text": "visited status flag"
            },
            "attribute": "isvisited",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
