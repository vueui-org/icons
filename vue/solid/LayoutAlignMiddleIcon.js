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
    _createElementVNode("path", { d: "M13 5a3 3 0 0 1 3 3v3h4a1 1 0 0 1 0 2h-4v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3H4a1 1 0 0 1 0-2h4V8a3 3 0 0 1 3-3z" })
  ]))
}