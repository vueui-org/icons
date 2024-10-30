const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M13 8h-2a2 2 0 0 0-2 2v1l.005.15A2 2 0 0 0 11 13h2v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v1h-2v-1zM7.01 4H7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2" })
  ]))
}