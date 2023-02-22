import { define, html } from "uce"
import { RADIO_OFF, RADIO_ON } from "./icons"
import { namedColors, actions } from "../utils"

const COLOR_PICK = "proto-uce-color-pick"

define(COLOR_PICK, {
  init() {
    this.tags = [RADIO_OFF, RADIO_ON]

    this.render()
  },
  onClick() {
    const { value } = this

    actions.setPick(value)
  },
  props: {
    pick: undefined,
    value: undefined,
  },
  render() {
    const hex = namedColors[this.value]
    const selected = this.value === this.pick

    this.html`
      <div 
        aria-label=${this.value} 
        title=${this.value} 
        role="radio" 
      >
        ${
          selected
            ? html`<proto-uce-icon-radio-on .hex=${hex} />`
            : html`<proto-uce-icon-radio-off .hex=${hex} />`
        }
      </div>
    `
  },
})

export { COLOR_PICK }
export default COLOR_PICK
