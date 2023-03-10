import { define } from "uce"

const HEADER = "proto-uce-header"

define(HEADER, {
  props: {
    label: "",
  },
  render() {
    this.html`
      <h1 class="text-clrs-red mr-0 ml-0 mt-11 mb-11 text-center text-6xl font-thin uppercase">
        ${this.label}
      </h1>
    `
  },
})

export { HEADER }
export default HEADER
