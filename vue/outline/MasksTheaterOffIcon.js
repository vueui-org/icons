const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13 9h6.808a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718A4 4 0 0 1 17.25 21h-1.5a4 4 0 0 1-3.983-3.635l-.567-6.182M18 13h.01" }),
    _createElementVNode("path", { d: "M15 16.5q.985.657 1.97.451M8.632 15.982A4 4 0 0 1 8.25 16h-1.5a4 4 0 0 1-3.983-3.635L2.2 6.183a2 2 0 0 1 .514-1.531A2 2 0 0 1 4 4m4 0h2.808a2 2 0 0 1 2 2M6 8h.01" }),
    _createElementVNode("path", { d: "M6 12q1.146-.765 2.291-.36M3 3l18 18" })
  ]))
}