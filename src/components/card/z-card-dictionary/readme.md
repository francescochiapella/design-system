# z-card-dictionary



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description      | Type      | Default     |
| ---------- | ---------- | ---------------- | --------- | ----------- |
| `cover`    | `cover`    | card cover       | `string`  | `undefined` |
| `disabled` | `disabled` | card is disabled | `boolean` | `false`     |
| `flipped`  | `flipped`  | card is flipped  | `boolean` | `false`     |
| `name`     | `name`     | card title       | `string`  | `undefined` |


## Slots

| Slot            | Description         |
| --------------- | ------------------- |
|                 | generic card slot   |
| `"back-footer"` | flipped card footer |
| `"back-info"`   | flipped card info   |


## Dependencies

### Depends on

- [z-card](../z-card)
- [z-card-body](../z-card-body)
- [z-card-cover](../z-card-cover)
- [z-button](../../buttons/z-button)
- [z-card-header](../z-card-header)

### Graph
```mermaid
graph TD;
  z-card-dictionary --> z-card
  z-card-dictionary --> z-card-body
  z-card-dictionary --> z-card-cover
  z-card-dictionary --> z-button
  z-card-dictionary --> z-card-header
  z-button --> z-icon
  style z-card-dictionary fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*