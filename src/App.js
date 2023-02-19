import { define } from "uce"
import { COLORS, CONTROLS, ESWAT2, HEADER, VALUES } from "./components"
import { actions } from "./utils"

const APP = "proto-uce-app"

define(APP, {
  init() {
    this.tags = [COLORS, CONTROLS, ESWAT2, HEADER, VALUES]

    actions.init()

    this.render()
  },
  render() {
    this.html`
      <main class="ds1-main">
        <proto-uce-eswat2 class="absolute top-8 right-8" />
        <proto-uce-header label="Tinker uCE" />
        <proto-uce-controls />
        <proto-uce-colors />
        <hr class="ml-0 mr-0" />
        <proto-uce-values />
      </main>
    `
  },
})
