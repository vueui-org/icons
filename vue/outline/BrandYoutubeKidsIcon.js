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
    _createElementVNode("path", { d: "m18.608 17.75-3.9.268h-.027a13.8 13.8 0 0 0-3.722.828l-2.511.908a4.11 4.11 0 0 1-3.287-.216 3.82 3.82 0 0 1-1.98-2.527l-1.376-6.05a3.67 3.67 0 0 1 .536-2.86A3.96 3.96 0 0 1 4.83 6.44l11.25-2.354c2.137-.448 4.247.85 4.713 2.9l1.403 6.162a3.68 3.68 0 0 1-.697 3.086 4 4 0 0 1-2.89 1.512v.002z" }),
    _createElementVNode("path", { d: "m9 10 1.208 5 4.292-4z" })
  ]))
}