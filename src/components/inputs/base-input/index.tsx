import {Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'base-z-input',
  styleUrl: 'styles.css',
})
export class BaseInput {
  @Prop() type: string;
  @Prop() autocomplete: string;

  render() {
    return (
      <input type={this.type} autocomplete={this.autocomplete}></input>
    );
  }
}
