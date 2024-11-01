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
    _createElementVNode("path", { d: "M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" }),
    _createElementVNode("path", { d: "M14 3a5 5 0 0 1 4.872 6.13 3 3 0 0 1 .178 5.681 3 3 0 1 1-4.684 3.626 5 5 0 1 1-8.662-5 5 5 0 1 1 4.645-8.856A4.98 4.98 0 0 1 14 2.996z" })
  ]))
}