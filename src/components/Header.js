import { define } from "uce"

const HEADER = "proto-uce-header"

define(HEADER, {
  render() {
    const { label } = this.props

    this.html`
      <h1 class="text-clrs-red mr-0 ml-0 mt-11 mb-11 text-center text-6xl font-thin uppercase">
        ${label}
      </h1>
    `
  },
})

export { HEADER }
export default HEADER
