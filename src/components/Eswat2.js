import { define } from "uce"
import { FINGERPRINT } from "./icons"

const ESWAT2 = "proto-uce-eswat2"
const url = "https://eswat2.github.io"
const who = "eswat2"

define(ESWAT2, {
  init() {
    this.tags = [FINGERPRINT]

    this.render()
  },
  render() {
    this.html`
      <a
        class="text-clrs-gray hover:text-clrs-navy"
        href=${url}
        aria-label=${who}
        title=${who}
      >
        <proto-uce-icon-fingerprint />
      </a>
    `
  },
})

export { ESWAT2 }
export default ESWAT2
