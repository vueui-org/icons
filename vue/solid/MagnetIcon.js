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
    _createElementVNode("path", { d: "M21 9v4a9 9 0 0 1-18 0V9h7v4a2 2 0 1 0 4 0V9zm-3-7a3 3 0 0 1 3 3v2h-7V5a3 3 0 0 1 3-3zM7 2a3 3 0 0 1 3 3v2H3V5a3 3 0 0 1 3-3z" })
  ]))
}