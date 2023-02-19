import { define, html } from "uce"
import { RADIO_OFF, RADIO_ON } from "./icons"
import { namedColors, actions, state } from "../utils"

const COLOR_PICK = "proto-uce-color-pick"

define(COLOR_PICK, {
  init() {
    this.tags = [RADIO_OFF, RADIO_ON]
    this.pick = state.get().pick
    this.selected = this.props.value === this.pick

    this.select = (value) => {
      return () => {
        actions.setPick(value)
      }
    }

    state.listen((value, key) => {
      if (key === "pick") {
        this.pick = value.pick
        this.selected = this.props.value === this.pick

        this.render()
      }
    })

    this.render()
  },
  render() {
    const { value } = this.props
    const hex = namedColors[value]

    this.html`
      <div 
        aria-label=${value} 
        title=${value} 
        role="radio" 
        onClick=${this.select(value)}
      >
        ${
          this.selected
            ? html`<proto-uce-icon-radio-on hex=${hex} />`
            : html`<proto-uce-icon-radio-off hex=${hex} />`
        }
      </div>
    `
  },
})

export { COLOR_PICK }
export default COLOR_PICK
