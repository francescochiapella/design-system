/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  CardBean,
} from './beans';


export namespace Components {
  interface BaseComponentLayer {
    'myProp': string;
  }
  interface FooterIpad {}
  interface ZCardBody {
    'bookimg': string;
  }
  interface ZCardComponent {
    'carddata': CardBean & {};
  }
  interface ZCardFooter {
    'carddata': CardBean & {};
    'handlecardopen': (e: MouseEvent) => void;
    'isopen': boolean;
  }
  interface ZCardHeader {
    'titolo': string;
  }
  interface ZCardManager {
    'myProp': string;
  }
}

declare global {


  interface HTMLBaseComponentLayerElement extends Components.BaseComponentLayer, HTMLStencilElement {}
  var HTMLBaseComponentLayerElement: {
    prototype: HTMLBaseComponentLayerElement;
    new (): HTMLBaseComponentLayerElement;
  };

  interface HTMLFooterIpadElement extends Components.FooterIpad, HTMLStencilElement {}
  var HTMLFooterIpadElement: {
    prototype: HTMLFooterIpadElement;
    new (): HTMLFooterIpadElement;
  };

  interface HTMLZCardBodyElement extends Components.ZCardBody, HTMLStencilElement {}
  var HTMLZCardBodyElement: {
    prototype: HTMLZCardBodyElement;
    new (): HTMLZCardBodyElement;
  };

  interface HTMLZCardComponentElement extends Components.ZCardComponent, HTMLStencilElement {}
  var HTMLZCardComponentElement: {
    prototype: HTMLZCardComponentElement;
    new (): HTMLZCardComponentElement;
  };

  interface HTMLZCardFooterElement extends Components.ZCardFooter, HTMLStencilElement {}
  var HTMLZCardFooterElement: {
    prototype: HTMLZCardFooterElement;
    new (): HTMLZCardFooterElement;
  };

  interface HTMLZCardHeaderElement extends Components.ZCardHeader, HTMLStencilElement {}
  var HTMLZCardHeaderElement: {
    prototype: HTMLZCardHeaderElement;
    new (): HTMLZCardHeaderElement;
  };

  interface HTMLZCardManagerElement extends Components.ZCardManager, HTMLStencilElement {}
  var HTMLZCardManagerElement: {
    prototype: HTMLZCardManagerElement;
    new (): HTMLZCardManagerElement;
  };
  interface HTMLElementTagNameMap {
    'base-component-layer': HTMLBaseComponentLayerElement;
    'footer-ipad': HTMLFooterIpadElement;
    'z-card-body': HTMLZCardBodyElement;
    'z-card-component': HTMLZCardComponentElement;
    'z-card-footer': HTMLZCardFooterElement;
    'z-card-header': HTMLZCardHeaderElement;
    'z-card-manager': HTMLZCardManagerElement;
  }
}

declare namespace LocalJSX {
  interface BaseComponentLayer extends JSXBase.HTMLAttributes<HTMLBaseComponentLayerElement> {
    'myProp'?: string;
  }
  interface FooterIpad extends JSXBase.HTMLAttributes<HTMLFooterIpadElement> {}
  interface ZCardBody extends JSXBase.HTMLAttributes<HTMLZCardBodyElement> {
    'bookimg'?: string;
  }
  interface ZCardComponent extends JSXBase.HTMLAttributes<HTMLZCardComponentElement> {
    'carddata'?: CardBean & {};
  }
  interface ZCardFooter extends JSXBase.HTMLAttributes<HTMLZCardFooterElement> {
    'carddata'?: CardBean & {};
    'handlecardopen'?: (e: MouseEvent) => void;
    'isopen'?: boolean;
  }
  interface ZCardHeader extends JSXBase.HTMLAttributes<HTMLZCardHeaderElement> {
    'titolo'?: string;
  }
  interface ZCardManager extends JSXBase.HTMLAttributes<HTMLZCardManagerElement> {
    'myProp'?: string;
  }

  interface IntrinsicElements {
    'base-component-layer': BaseComponentLayer;
    'footer-ipad': FooterIpad;
    'z-card-body': ZCardBody;
    'z-card-component': ZCardComponent;
    'z-card-footer': ZCardFooter;
    'z-card-header': ZCardHeader;
    'z-card-manager': ZCardManager;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


