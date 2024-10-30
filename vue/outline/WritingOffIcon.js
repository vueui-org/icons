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
    _createElementVNode("path", { d: "M16 7h4M16 16v1l2 2 .5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7M18 19H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6M3 3l18 18" })
  ]))
}