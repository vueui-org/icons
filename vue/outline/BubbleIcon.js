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
    _createElementVNode("path", { d: "M12.4 3a5.34 5.34 0 0 1 4.906 3.239 5.333 5.333 0 0 1-1.195 10.6 4.26 4.26 0 0 1-5.28 1.863L7 21v-3.134a2.668 2.668 0 0 1-1.795-3.773A4.8 4.8 0 0 1 8.113 5.16 5.33 5.33 0 0 1 12.4 3" })
  ]))
}