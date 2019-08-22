import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-input-text',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZInputText {
  @Prop() inputid: string;
  @Prop() label?: string;
  @Prop() value?: string;
  @Prop() placeholder?: string;
  @Prop() type?: string = 'text';

  @Event() inputChange: EventEmitter;
  emitInputChange(e: any) {
    this.inputChange.emit({ value: e.target.value });
  }

  @Event() inputSearch: EventEmitter;
  emitInputSearch(e: any) {
    this.inputSearch.emit({ ev: e });
  }

  render() {
    return (
      <div>
        <label>{this.label}</label>
        {/* 
  // @ts-ignore */}
        <input 
          type={this.type} 
          id={this.inputid} 
          name={this.inputid} 
          placeholder={this.placeholder} 
          value={this.value}
          onSearch={(e: any) => { this.emitInputSearch(e) }}
          onKeyUp={(e: any) => { this.emitInputChange(e) }}
        />
      </div>
    );
  }
}
