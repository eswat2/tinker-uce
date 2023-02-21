import { define } from "uce"

const CHEVRON_DOUBLE_LEFT = "proto-uce-icon-chevron-double-left"

define(CHEVRON_DOUBLE_LEFT, {
  props: {
    hex: "currentColor",
    size: 24,
  },
  render() {
    const { hex, size } = this

    this.html`
      <svg
        width=${size}
        height=${size}
        viewBox="0 0 24 24"
      >
        <g fill=${hex}>
          <path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" />
        </g>
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    `
  },
})

export { CHEVRON_DOUBLE_LEFT }
export default CHEVRON_DOUBLE_LEFT
