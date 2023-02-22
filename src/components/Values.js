import { define } from "uce"
import { TW_LABEL } from "./TwLabel"

const VALUES = "proto-uce-values"

define(VALUES, {
  init() {
    this.tags = [TW_LABEL]

    this.render()
  },
  props: {
    clicks: 0,
    pick: undefined,
    sample: [],
  },
  render() {
    this.html`
      <div class="flex">
        <div class="flex flex-col">
          <div class="flex">
            <span class="mr-10px font-bold">color:</span>
            <span class="text-clrs-slate4 italic">${this.pick}</span>
          </div>
          <div class="mt-5px flex">
            <span class="mr-10px font-bold">sample:</span>
            <span class="text-clrs-slate4 italic">${
              this.clicks > 0 ? this.sample : "..."
            }</span>
          </div>
        </div>
        <proto-uce-tw-label class="ml-auto" />
      </div>
    `
  },
})

export { VALUES }
export default VALUES
