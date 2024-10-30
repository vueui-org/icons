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
    _createElementVNode("path", { d: "M16.52 6a2 2 0 0 1 1.561.75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624A2 2 0 0 1 16.52 18H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" })
  ]))
}