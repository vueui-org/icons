const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M14 8h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 10h3v3a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0V9a1 1 0 0 0-1-1M7.01 4H7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2" })
  ]))
}