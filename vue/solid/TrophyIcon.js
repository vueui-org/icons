const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
  ]))
}