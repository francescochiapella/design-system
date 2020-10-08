import { use } from "typescript-mix";
import { Component, EventEmitter, Prop, State, Event } from "@stencil/core";
// import { BaseInput } from "../base-input";
import { ZInput } from "../z-input";
import { InputTypeBean } from "../../../beans";

@Component({
  tag: "open-z-input",
  styleUrl: "../z-input/styles.css",
  shadow: false,
  scoped: true
})
export class OpenZInput {
  @use(ZInput) this: ZInput;
  /** the id of the input element */
  // @Prop() htmlid: string = randomId();
  /** input types */
  @Prop() type: InputTypeBean;
  @Prop() autocomplete: string;

  /** the input name */
  // @Prop() name?: string;
  // /** the input label */
  // @Prop() label?: string;
  // /** the input value */
  // @Prop() value?: string;
  // /** the input is disabled */
  // @Prop() disabled?: boolean = false;
  // /** the input is readonly */
  // @Prop() readonly?: boolean = false;
  // /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
  // @Prop() required?: boolean = false;
  // /** checked: available for checkbox, radio */
  // @Prop({ mutable: true }) checked?: boolean = false;
  // /** the input placeholder (optional) */
  // @Prop() placeholder?: string;
  // /** the input html title (optional) */
  // @Prop() htmltitle?: string;
  // /** the input status (optional): available for text, password, number, email, textarea, select */
  // @Prop() status?: InputStatusBean;
  // /** show input helper message (optional): available for text, password, number, email, textarea, select */
  // @Prop() hasmessage?: boolean = true;
  // /** input helper message (optional): available for text, password, number, email, textarea, select */
  // @Prop() message?: string;
  // /** the input label position: available for checkbox, radio */
  // @Prop() labelafter?: boolean = true;
  // /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
  // @Prop() typingtimeout?: number = 300;
  // /** items: available for select */
  // @Prop() items?: SelectItemBean[] | string;

  @State() isTyping: boolean = false;
  @State() textareaWrapperHover: string = "";
  @State() textareaWrapperFocus: string = "";
  @State() isOpen: boolean = false;

  @Event() startTyping: EventEmitter;
  emitStartTyping = ZInput.prototype.emitStartTyping;

  @Event() inputChange: EventEmitter;
  emitInputChange = ZInput.prototype.emitInputChange;

  @Event() inputCheck: EventEmitter;
  emitInputCheck = ZInput.prototype.emitInputCheck;

  @Event() stopTyping: EventEmitter;
  emitStopTyping = ZInput.prototype.emitStopTyping;
}
