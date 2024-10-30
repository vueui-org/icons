const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16.18 16.172a2 2 0 0 0 2.652 2.648" }),
    _createElementVNode("path", { d: "M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8" }),
    _createElementVNode("path", { d: "m16 5 1.5 7H22M2 10h8m4 0h3M7 7v3M12 5v3M3 3l18 18" })
  ]))
}