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
    _createElementVNode("path", { d: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" }),
    _createElementVNode("path", { d: "M15 14c-2 0-3 1-3.5 2.05M10 9.25c-.5 1-2.5 1-3 0M17 9.25c-.5 1-2.5 1-3 0" })
  ]))
}