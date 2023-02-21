import { define, html } from "uce"
import { RADIO_OFF, RADIO_ON } from "./icons"
import { namedColors, actions, state } from "../utils"

const COLOR_PICK = "proto-uce-color-pick"

define(COLOR_PICK, {
  init() {
    this.tags = [RADIO_OFF, RADIO_ON]
    this.pick = state.get().pick

    state.listen((value, key) => {
      if (key === "pick") {
        this.pick = value.pick

        this.render()
      }
    })

    this.render()
  },
  onClick() {
    const { value } = this

    actions.setPick(value)
  },
  props: {
    value: undefined,
  },
  render() {
    const { value, pick } = this
    const hex = namedColors[value]
    const selected = value === pick

    this.html`
      <div 
        aria-label=${value} 
        title=${value} 
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
