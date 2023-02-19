import { define } from "uce"
import { TW_VERSION } from "../utils"

const TW_LABEL = "proto-uce-tw-label"

define(TW_LABEL, {
  render() {
    this.html`
      <label class="text-clrs-slate4 align-top text-xs italic">
        Tailwind ${TW_VERSION}
      </label>
    `
  },
})

export { TW_LABEL }
export default TW_LABEL
