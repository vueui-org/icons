const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M3 18a1.93 1.93 0 0 0 .306 1.076A2 2 0 0 0 4.89 20c.646.033-.537 0 .11 0h3a4.99 4.99 0 0 0-3.66-4.81q.839-1.459 2.04-3.531A9 9 0 0 1 12 20h7a2 2 0 0 0 1.84-2.75L13.74 5a2 2 0 0 0-3.5 0L8.4 8.176C12.882 10.226 16 14.747 16 20" })
  ]))
}