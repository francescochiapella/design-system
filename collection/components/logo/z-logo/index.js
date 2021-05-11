import { Component, Prop, h } from "@stencil/core";
export class ZLogo {
  constructor() {
    /** image width */
    this.width = 163;
    /** image height */
    this.height = 42;
  }
  renderSvg() {
    return (h("svg", { width: `${this.width}px`, height: `${this.height}px`, viewBox: "0 0 163 42" },
      h("title", null, this.imagealt),
      h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        h("g", { transform: "translate(-663.000000, -534.000000)" },
          h("g", { transform: "translate(371.000000, 369.000000)" },
            h("g", { transform: "translate(285.000000, 2.000000)" },
              h("g", { transform: "translate(0.000000, 156.000000)" },
                h("g", null,
                  h("g", { transform: "translate(7.636364, 7.636364)" },
                    h("polygon", { points: "1.70530257e-13 40.7272727 161.884545 40.7272727 161.884545 0 1.70530257e-13 0" }),
                    h("path", { d: "M148.501818,32.6807001 L154.248342,32.6807001 L154.248342,8.04537315 L148.501818,8.04537315 L148.501818,32.6807001 Z M134.349311,32.6807001 L146.667574,32.6807001 L146.667574,28.3207306 L140.436476,28.3207306 L140.436476,8.04537315 L134.349311,8.04537315 L134.349311,32.6807001 Z M120.196443,32.6807001 L132.513506,32.6807001 L132.513506,28.3207306 L126.283608,28.3207306 L126.283608,8.04537315 L120.196443,8.04537315 L120.196443,32.6807001 Z M105.225555,8.04537315 L105.225555,32.6807001 L118.363037,32.6807001 L118.363037,28.3195312 L111.381089,28.3195312 L111.381089,22.3858946 L117.967221,22.3858946 L117.967221,17.9899418 L111.381089,17.9899418 L111.381089,12.4077415 L118.363037,12.4077415 L118.363037,8.04537315 L105.225555,8.04537315 Z M86.9693975,32.6807001 L93.0613603,32.6807001 L93.0613603,22.3858946 L97.3013857,22.3858946 L97.3013857,32.6807001 L103.392149,32.6807001 L103.392149,8.04537315 L97.3013857,8.04537315 L97.3013857,17.9911413 L93.0613603,17.9911413 L93.0613603,8.04537315 L86.9693975,8.04537315 L86.9693975,32.6807001 Z M61.1321098,32.6807001 L66.8810325,32.6807001 L66.8810325,8.04537315 L61.1321098,8.04537315 L61.1321098,32.6807001 Z M33.8777427,23.237498 L32.2524996,12.5636689 L30.5936721,23.237498 L33.8777427,23.237498 Z M41.6777101,32.6807001 L35.8088433,32.6807001 L34.9644366,27.063716 L30.3609805,27.063716 L29.4829894,32.6807001 L23.6129231,32.6807001 L28.639782,8.04537315 L36.6520506,8.04537315 L41.6777101,32.6807001 Z M54.1207152,24.0279298 L48.8707602,8.04537315 L42.8759521,8.04537315 L42.8759521,32.6807001 L47.984373,32.6807001 L47.984373,16.6297753 L53.1971453,32.6807001 L59.2999032,32.6807001 L59.2999032,8.04537315 L54.1207152,8.04537315 L54.1207152,24.0279298 Z M68.7132396,20.3636364 C68.7132396,21.9672895 68.7132396,23.411417 68.8463776,24.8975249 C68.9795156,26.3908294 69.2481905,27.8013725 69.7951358,29.0188055 C70.9058185,31.4920537 73.1391784,33.0909091 77.4511703,33.0909091 C82.4144588,33.0909091 85.1371908,30.8479537 85.1371908,24.1958516 L85.1371908,23.9043874 L79.5058134,23.9043874 L79.4962178,24.1850567 C79.4782262,24.6636338 79.472229,25.2117785 79.4350463,25.7635216 C79.3990631,26.3092674 79.3330938,26.8466171 79.2023547,27.3191971 C78.939677,28.2523625 78.4503049,28.8628781 77.4511703,28.8628781 C74.9275455,28.8628781 74.4909489,26.7638557 74.4909489,20.3636364 C74.4909489,13.963417 74.9275455,11.8643946 77.4511703,11.8643946 C78.6578083,11.8643946 79.257529,12.7291918 79.257529,16.0240574 L79.257529,16.3179205 L84.855322,16.3179205 L84.866117,16.0360518 C85.0748198,10.6817454 82.8774432,7.63636364 77.4511703,7.63636364 C73.1403779,7.63636364 70.9082174,9.21602796 69.7951358,11.6832789 C69.2481905,12.8959142 68.9795156,14.3040584 68.8463776,15.8009613 C68.7132396,17.2906675 68.7132396,18.7443905 68.7132396,20.3636364 L68.7132396,20.3636364 Z M22.2095767,8.0465726 L22.2095767,12.930698 L13.748717,28.3207306 L22.41708,28.3207306 L22.41708,32.6807001 L7.63636364,32.6807001 L7.63636364,27.8673418 L16.0984227,12.408941 L8.70746481,12.408941 L8.70746481,8.0465726 L22.2095767,8.0465726 Z" }))))))))));
  }
  render() {
    return (h("div", null,
      this.link && (h("a", { style: { width: `${this.width}px`, height: `${this.height}px` }, href: this.link, target: this.targetblank ? "_blank" : undefined }, this.renderSvg())),
      !this.link && this.renderSvg()));
  }
  static get is() { return "z-logo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "image width"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "163"
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "image height"
      },
      "attribute": "height",
      "reflect": false,
      "defaultValue": "42"
    },
    "imagealt": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "alternative image text"
      },
      "attribute": "imagealt",
      "reflect": false
    },
    "link": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "link url (optional)"
      },
      "attribute": "link",
      "reflect": false
    },
    "targetblank": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "link target (optional)"
      },
      "attribute": "targetblank",
      "reflect": false
    }
  }; }
}
