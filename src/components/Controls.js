import { define } from "uce"
import { CHEVRON_DOUBLE_LEFT, CLOSE, REFRESH } from "./icons"
import { actions, state } from "../utils"

const CONTROLS = "proto-uce-controls"
const HELP = "click a button..."

define(CONTROLS, {
  init() {
    this.tags = [CHEVRON_DOUBLE_LEFT, CLOSE, REFRESH]
    this.clicks = state.get().clicks

    state.listen((value, key) => {
      if (key === "clicks") {
        this.clicks = value.clicks

        this.render()
      }
    })

    this.render()
  },
  render() {
    this.html`
      <div class="mb-10px mt-3 flex items-center">
        <button
          aria-label="Refresh"
          title="Refresh"
          class="ds1-button data-button bg-clrs-blue"
          onClick=${() => {
            actions.refresh()
          }}
        >
          <proto-uce-icon-refresh size="24" class="mb-[-3.5px]" />
        </button>
        <button
          aria-label="Reset"
          title="Reset"
          class="ds1-button data-button bg-clrs-red"
          onClick=${() => {
            actions.reset()
          }}
        >
          <proto-uce-icon-close size="24" class="mb-[-3.5px]" />
        </button>
        <span class="flex items-center">
          <proto-uce-icon-chevron-double-left size="28" class="mb-[-3.5px]" />
          <span class="italic">
            ${HELP}
            <sup>${this.clicks}</sup>
          </span>
        </span>
      </div>
    `
  },
})

export { CONTROLS }
export default CONTROLS
