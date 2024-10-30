const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14 2a1 1 0 0 1 1 1v3h3a1 1 0 0 1 .993.883L19 7v4a1 1 0 0 1-1 1h-3v4h3a1 1 0 0 1 .993.883L19 17v4a1 1 0 0 1-1 1h-4a5 5 0 0 1-5-5v-5H6a1 1 0 0 1-.993-.883L5 11V7a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2V3a1 1 0 0 1 1-1z" })
  ]))
}