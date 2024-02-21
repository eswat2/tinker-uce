import { define } from "uce"
import { COLORS, CONTROLS, ESWAT2, HEADER, VALUES } from "./components"
import { actions, state } from "./utils"

const APP = "proto-uce-app"

define(APP, {
  init() {
    this.tags = [COLORS, CONTROLS, ESWAT2, HEADER, VALUES]

    this.clicks = 0
    this.pick = undefined
    this.sample = []

    state.listen((value, _old, key) => {
      if (this[key] !== value[key]) {
        this[key] = value[key]

        this.render()
      }
    })

    actions.init()

    this.render()
  },
  render() {
    this.html`
      <main class="ds1-main">
        <proto-uce-eswat2 class="absolute top-8 right-8" />
        <proto-uce-header label="Tinker uCE" />
        <proto-uce-controls .clicks=${this.clicks} />
        <proto-uce-colors .pick=${this.pick} />
        <hr class="ml-0 mr-0" />
        <proto-uce-values 
          .clicks=${this.clicks} 
          .pick=${this.pick} 
          .sample=${this.sample} 
          />
      </main>
    `
  },
})
