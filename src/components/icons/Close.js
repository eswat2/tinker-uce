import { define } from "uce"

const CLOSE = "proto-uce-icon-close"

define(CLOSE, {
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
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </g>
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    `
  },
})

export { CLOSE }
export default CLOSE
