import { define, html } from "uce"
import { COLOR_PICK } from "./ColorPick"
import { colorNames } from "../utils"

const COLORS = "proto-uce-colors"

define(COLORS, {
  init() {
    this.tags = [COLOR_PICK]

    this.render()
  },
  render() {
    this.html`
      <div class="flex flex-wrap" role="radiogroup">
        ${colorNames.map(
          (key) => html` <proto-uce-color-pick value=${key} /> `
        )}
      </div>
    `
  },
})

export { COLORS }
export default COLORS
