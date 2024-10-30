const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M8 9h1.5a1.5 1.5 0 0 1 0 3H9h.5a1.5 1.5 0 0 1 0 3H8M3 12v.01M7.5 4.2v.01M7.5 19.8v.01M4.2 16.5v.01M4.2 7.5v.01" }),
    _createElementVNode("path", { d: "M12 21a9 9 0 0 0 0-18" })
  ]))
}