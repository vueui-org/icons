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
    _createElementVNode("path", { d: "M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 5V3M17 7l1.4-1.4M19 12h2M17 17l1.4 1.4M12 19v2M7 17l-1.4 1.4M6 12H4M7 7 5.6 5.6" })
  ]))
}