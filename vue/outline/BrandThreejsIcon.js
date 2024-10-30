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
    _createElementVNode("path", { d: "M8 22 3 3l19 5.5z" }),
    _createElementVNode("path", { d: "m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64" }),
    _createElementVNode("path", { d: "M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z" })
  ]))
}