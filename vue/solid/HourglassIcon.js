const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 2a2 2 0 0 1 1.995 1.85L19 4v2a7 7 0 0 1-3.393 6 7 7 0 0 1 3.388 5.728L19 18v2a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20v-2a7 7 0 0 1 3.393-6 7 7 0 0 1-3.388-5.728L5 6V4a2 2 0 0 1 1.85-1.995L7 2z" })
  ]))
}