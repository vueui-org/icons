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
    _createElementVNode("path", { d: "M6 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 5h2.5l1.632 4.897A6 6 0 0 0 11.825 14H14.5a5.5 5.5 0 0 0 0-11H14v6M6 9h14M9 17l1-3M16 14l1 3" })
  ]))
}